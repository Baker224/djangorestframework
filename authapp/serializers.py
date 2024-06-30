from rest_framework.serializers import ModelSerializer
from .models import MyUser

class MyUserModelSerializer(ModelSerializer):
    class Meta:
        model = MyUser
        fields = ['first_name', 'last_name', 'username', 'email']


class MyUserModelSerializerV2(ModelSerializer):
    class Meta:
        model = MyUser
        fields = ['first_name', 'last_name', 'username', 'email', 'is_superuser','is_staff']