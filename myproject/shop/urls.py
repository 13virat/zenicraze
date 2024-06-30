from django.urls import path
from . import views

app_name = 'shop'

urlpatterns = [
    path('', views.home, name='home'),
    path('products/', views.product_list, name='product_list'),
    path('<slug:category_slug>/', views.product_list, name='product_list_by_category'),
    path('product/<int:id>/<slug:slug>/', views.product_detail, name='product_detail'),
    path('product/<int:product_id>/add_review/', views.add_review, name='add_review'),
    path('search/', views.search, name='search'),
    path('shipping/', views.shipping, name='shipping'),
    path('checkout/', views.checkout, name='checkout'),
    path('payment-success/', views.payment_success, name='payment_success'),
    path('profile/', views.profile, name='profile'),
    path('categories/', views.category_list, name='category_list'),
    path('orders/', views.order_history, name='order_history'),
    path('category/<slug:category_slug>/', views.product_list_by_category, name='product_list_by_category'),
]
