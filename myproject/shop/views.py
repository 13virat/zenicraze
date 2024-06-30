import razorpay
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from .models import Product, Review
from .forms import ReviewForm
from django.db.models import Q
from .forms import SearchForm
from .models import Shipping, Order, Payment ,Category
from .forms import ShippingForm
from django.http import HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt
from .forms import UserForm, ProfileForm

def home(request):
    return render(request, 'shop/home.html')
def product_list(request):
    return render(request, 'shop/product/list.html', {
        'some_url': reverse('shop:home'),
    })

@login_required
def profile(request):
    if request.method == 'POST':
        user_form = UserForm(request.POST, instance=request.user)
        profile_form = ProfileForm(request.POST, instance=request.user.profile)
        if user_form.is_valid() and profile_form.is_valid():
            user_form.save()
            profile_form.save()
            return redirect('profile')
    else:
        user_form = UserForm(instance=request.user)
        profile_form = ProfileForm(instance=request.user.profile)
    return render(request, 'shop/profile.html', {
        'user_form': user_form,
        'profile_form': profile_form
    })

@csrf_exempt
def payment_success(request):
    if request.method == 'POST':
        razorpay_payment_id = request.POST.get('razorpay_payment_id')
        razorpay_order_id = request.POST.get('razorpay_order_id')
        razorpay_signature = request.POST.get('razorpay_signature')
        
        try:
            order = Checkout.objects.get(razorpay_order_id=razorpay_order_id)
            order.razorpay_payment_id = razorpay_payment_id
            order.razorpay_signature = razorpay_signature
            order.save()
            return render(request, 'shop/success.html')
        except Checkout.DoesNotExist:
            return HttpResponseBadRequest()
    return HttpResponseBadRequest()


@login_required
def checkout(request):
    if request.method == 'POST':
        total_amount = float(request.POST.get('total_amount')) * 100  # Amount in paise
        client = razorpay.Client(auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET))
        order = client.order.create({'amount': total_amount, 'currency': 'INR', 'payment_capture': '1'})
        
        Checkout.objects.create(
            user=request.user,
            total_amount=total_amount / 100,  # Store amount in rupees
            razorpay_order_id=order['id']
        )
        
        return render(request, 'shop/checkout.html', {
            'order_id': order['id'],
            'razorpay_key': settings.RAZORPAY_KEY_ID,
            'amount': total_amount
        })
    return render(request, 'shop/checkout.html')

@login_required
def shipping(request):
    if request.method == 'POST':
        form = ShippingForm(request.POST)
        if form.is_valid():
            shipping = form.save(commit=False)
            shipping.user = request.user
            # Calculate shipping cost (for simplicity, we use a flat rate)
            shipping.shipping_cost = 5.00
            shipping.save()
            order = Order.objects.get(user=request.user, is_paid=False)
            order.shipping = shipping
            order.total_amount += shipping.shipping_cost
            order.save()
            return redirect('checkout')
    else:
        form = ShippingForm()
    return render(request, 'shop/shipping.html', {'form': form})

def search(request):
    form = SearchForm()
    query = None
    results = []
    if 'query' in request.GET:
        form = SearchForm(request.GET)
        if form.is_valid():
            query = form.cleaned_data['query']
            results = Product.objects.filter(Q(name__icontains=query) | Q(description__icontains=query))
    return render(request, 'shop/search.html', {'form': form, 'query': query, 'results': results})

def product_list(request, category_slug=None):
    category = None
    categories = Category.objects.all()
    products = Product.objects.all()
    if category_slug:
        category = get_object_or_404(Category, slug=category_slug)
        products = products.filter(category=category)
    return render(request, 'shop/product/list.html', {'category': category, 'categories': categories, 'products': products})

@login_required
def add_review(request, product_id):
    product = get_object_or_404(Product, id=product_id)
    if request.method == 'POST':
        form = ReviewForm(request.POST)
        if form.is_valid():
            review = form.save(commit=False)
            review.user = request.user
            review.product = product
            review.save()
            return redirect('product_detail', product_id=product.id)
    else:
        form = ReviewForm()
    return render(request, 'shop/add_review.html', {'form': form, 'product': product})


def product_detail(request, id, slug):
    product = get_object_or_404(Product, id=id, slug=slug, available=True)
    reviews = product.reviews.all()
    return render(request, 'shop/product/detail.html', {'product': product, 'reviews': reviews})

def category_list(request):
    categories = Category.objects.all()
    return render(request, 'shop/category_list.html', {'categories': categories})

def product_list_by_category(request, category_slug):
    category = get_object_or_404(Category, slug=category_slug)
    products = Product.objects.filter(category=category)
    return render(request, 'shop/product/list.html', {'category': category, 'products': products})

@login_required
def place_order(request):
    if request.method == 'POST':
        user = request.user
        cart = request.session.get('cart', {})
        total_amount = sum(Product.objects.get(id=product_id).price * quantity for product_id, quantity in cart.items())
        
        order = Order.objects.create(user=user, total_amount=total_amount, is_paid=True)
        
        for product_id, quantity in cart.items():
            product = Product.objects.get(id=product_id)
            OrderItem.objects.create(order=order, product=product, quantity=quantity, price=product.price)
        
        request.session['cart'] = {}  # Clear the cart
        return redirect('order_history')
    return render(request, 'shop/checkout.html')

@login_required
def order_history(request):
    orders = Order.objects.filter(user=request.user).order_by('-created_at')
    return render(request, 'shop/order_history.html', {'orders': orders})