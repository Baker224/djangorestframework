from rest_framework.relations import StringRelatedField
from rest_framework.serializers import ModelSerializer

from authapp.serializers import MyUserModelSerializer
from .models import Project, TODO

class ProjectModelSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = ['title', 'repo', 'users']

class TODOModelSerializer(ModelSerializer):
    class Meta:
        model = TODO
        fields = ['project', 'text', 'created_at', 'updated_at',
                  'creater', 'is_active']