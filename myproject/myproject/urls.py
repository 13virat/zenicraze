from django.contrib import admin
from django.urls import path, include
from shop import views as shop_views  

urlpatterns = [
    path("admin/", admin.site.urls),
    path("accounts/", include("accounts.urls")),
    path("", include("shop.urls")),
    path("", shop_views.home, name='home'), 
]
