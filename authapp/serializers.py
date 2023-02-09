from rest_framework.serializers import ModelSerializer
from .models import MyUser

class MyUserModelSerializer(ModelSerializer):
    class Meta:
        model = MyUser
        fields = ['first_name', 'last_name', 'user_name', 'email']