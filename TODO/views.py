from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import TODO, Project
from .serializers import ProjectModelSerializer, TODOModelSerializer

class ProjectModelViewSet(ModelViewSet):
    serializer_class = ProjectModelSerializer
    queryset = Project.objects.all()

class TODOModelViewSet(ModelViewSet):
    serializer_class = TODOModelSerializer
    queryset = TODO.objects.all()
