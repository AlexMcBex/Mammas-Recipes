# from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import Recipe
from .serializers import RecipeSerializer

# Create your views here.
class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    permission_classes= [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        # return super().perform_create(serializer)
        serializer.save(user=self.request.user)