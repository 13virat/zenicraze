from django.contrib import admin
from .models import Category, Product, Order, OrderItem, ResinCraft, CrochetedItem, Candle, Cake, Crunchy

# Removed the duplicate registration for Category and Product

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name']
    search_fields = ['name']

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'stock', 'available', 'created_at', 'updated_at')
    list_filter = ('available', 'created_at', 'updated_at')
    search_fields = ('name', 'description')
    list_editable = ('price', 'stock', 'available')

@admin.register(ResinCraft)
class ResinCraftAdmin(ProductAdmin):
    list_display = ('name', 'price', 'stock', 'available', 'material', 'created_at', 'updated_at')

@admin.register(CrochetedItem)
class CrochetedItemAdmin(ProductAdmin):
    list_display = ('name', 'price', 'stock', 'available', 'yarn_type', 'created_at', 'updated_at')

@admin.register(Candle)
class CandleAdmin(ProductAdmin):
    list_display = ('name', 'price', 'stock', 'available', 'scent', 'created_at', 'updated_at')

@admin.register(Cake)
class CakeAdmin(ProductAdmin):
    list_display = ('name', 'price', 'stock', 'available', 'flavor', 'weight', 'created_at', 'updated_at')

@admin.register(Crunchy)
class CrunchyAdmin(ProductAdmin):
    list_display = ('name', 'price', 'stock', 'available', 'ingredients', 'created_at', 'updated_at')

class OrderItemInline(admin.TabularInline):
    model = OrderItem
    readonly_fields = ['product', 'quantity', 'price']
    extra = 0

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ['user', 'created', 'updated', 'paid']
    list_filter = ['paid', 'created', 'updated']
    search_fields = ['user__username']
    inlines = [OrderItemInline]
