from django.contrib import admin
from django.urls import path,include
from rest_framework.routers import DefaultRouter
from api import views
from rest_framework.authtoken.views import obtain_auth_token

router = DefaultRouter()
router.register(r'articales',views.ArticlesViewSet)
router.register(r'users', views.UserViewSet)
urlpatterns = [
    path('', include(router.urls)),
    path('auth/', obtain_auth_token),
]