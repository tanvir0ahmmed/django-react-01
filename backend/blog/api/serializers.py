from django.contrib.auth.models import User
from .models import Articales
from rest_framework import serializers
from rest_framework.authtoken.models import Token

class ArticalesSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.user')
    class Meta:
        model = Articales
        fields = ['id','title', 'description', 'created_at','owner', 'user']
    

class UserSerializer(serializers.ModelSerializer):
    #user = serializers.PrimaryKeyRelatedField(many=True, queryset=Articales.objects.all())
    class Meta:
        model = User
        fields = ['id', 'username', 'password']
        
        extra_kwargs = {
            'password':{
                'write_only': True,
                'required':True,
            }
        }
    
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.get_or_create(user=user)
        return user