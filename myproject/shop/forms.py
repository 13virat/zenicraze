from django import forms
from .models import Review, Shipping, Profile
from django.contrib.auth.models import User

class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email']

class ProfileForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ['address', 'phone']

class ShippingForm(forms.ModelForm):
    class Meta:
        model = Shipping
        fields = ['address', 'city', 'state', 'postal_code', 'country', 'shipping_method']

class ReviewForm(forms.ModelForm):
    class Meta:
        model = Review
        fields = ['rating', 'comment']

class SearchForm(forms.Form):
    query = forms.CharField(max_length=255, required=False)
