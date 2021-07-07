from .models import Articales
from django.contrib.auth.models import User
from .serializers import ArticalesSerializer, UserSerializer
from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication

# Create your views here.
from rest_framework import permissions, viewsets
from rest_framework.response import Response

class ArticlesViewSet(viewsets.ModelViewSet):
    queryset = Articales.objects.all()
    serializer_class = ArticalesSerializer
    permission_classes=[IsAuthenticated]
    authentication_classes=(TokenAuthentication,)
    
    def perform_create(self, serializers):
        serializers.save(owner=self.request.user)
        
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer