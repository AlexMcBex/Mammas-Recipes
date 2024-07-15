from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import  RecipeViewSet, UserRegistrationView

router = DefaultRouter()
router.register(r'recipes', RecipeViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('register/', UserRegistrationView.as_view(), name='user-register'),
]