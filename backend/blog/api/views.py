from rest_framework.views import APIView
from .models import Articales
from django.contrib.auth.models import User
from .serializers import ArticalesSerializer, UserSerializer, LogInSerializer
from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework import status, generics, response
from rest_framework.authtoken.models import Token
# Create your views here.
from rest_framework import permissions, viewsets
from rest_framework.response import Response
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.core.exceptions import ObjectDoesNotExist

''' class ArticlesViewSet(viewsets.ModelViewSet):
    #queryset = Articales.objects.all()
    permission_classes=[IsAuthenticated]
    authentication_classes=(TokenAuthentication,)
    user = ''
    def get1(self, request, *args, **kwargs):
        user = request.user
        print()
    queryset = Articales.objects.filter(username=user)
    serializer_class = ArticalesSerializer    
    def perform_create(self, serializers):
        serializers.save(owner=self.request.user) '''
        
class ArticlesViewSet(generics.ListCreateAPIView):
    permission_classes=[IsAuthenticated]
    authentication_classes=(TokenAuthentication,)
    serializer_class = ArticalesSerializer
    
    def get_queryset(self) :
        user = self.request.user
        print(user)
        return Articales.objects.filter(user=user)
    
    serializer_class = ArticalesSerializer
    def perform_create(self, serializers):
        serializers.save(owner=self.request.user)
   
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
''' class LogInViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = LogInSerializer
    
    def post(self, serializers):
        print('Log In',serializers) ''' 

class LogInViewSet(APIView):
    authentication_classes=(TokenAuthentication,)
    def post(self, request, format=None):
        user = authenticate(username=request.data.get('username'),
                                password=request.data.get('password'))
        
        #print(user)
        '''
        try:
        request.user.auth_token.delete()
    except (AttributeError, ObjectDoesNotExist):
        pass
        '''
        if user:
            token = Token.objects.create(user=user)
            login(request, user)
            return Response({'username':user.username, 'id':user.id, 'token':token.key}, status=status.HTTP_201_CREATED)
        return Response({'error':'username or password is not match'}, status=status.HTTP_400_BAD_REQUEST)
    
class LogOutViewSet(APIView):
    #permission_classes=[IsAuthenticated]
    authentication_classes=(TokenAuthentication,)
    def get(self, request):
        print('request->', request.user)
        request.user.auth_token.delete()
        return Response(status=status.HTTP_200_OK)
    ''' def post(self, request):
        print('---',request.user)
        try:
            request.user.auth_token.delete()
        except (AttributeError, ObjectDoesNotExist):
            print('No Object')
            pass
        #logout(request)
        return Response({'error':'username or password is not match'}, status = status.HTTP_408_REQUEST_TIMEOUT) '''
    
    