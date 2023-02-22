from django.shortcuts import render
from rest_framework import mixins
from rest_framework.decorators import action
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from .models import TODO, Project
from rest_framework.pagination import LimitOffsetPagination
from .serializers import ProjectModelSerializer, TODOModelSerializer

class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class ProjectModelViewSet(ModelViewSet):
    serializer_class = ProjectModelSerializer
    queryset = Project.objects.all()
    pagination_class = ProjectLimitOffsetPagination

    def get_queryset(self):
        title = self.request.query_params.get('title', None)
        if title:
            return Project.objects.filter(title__contains= title)
        return Project.objects.all()


class TODOLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20


class TODOModelViewSet(ModelViewSet):
    serializer_class = TODOModelSerializer
    queryset = TODO.objects.all()
    pagination_class = TODOLimitOffsetPagination

    def perform_destroy(self, instance):
        instance.is_active = False
        instance.save()

    def get_queryset(self):
        project = self.request.query_params.get('project', None)
        if project:
            return TODO.objects.filter(project__contains= project)
        return TODO.objects.all()


