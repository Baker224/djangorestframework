from django.shortcuts import render
from rest_framework import mixins
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from .models import MyUser
from .serializers import MyUserModelSerializer

class MyUserModelViewSet(mixins.RetrieveModelMixin,
                   mixins.UpdateModelMixin,
                   mixins.ListModelMixin,
                   GenericViewSet):
    serializer_class = MyUserModelSerializer
    queryset = MyUser.objects.all()

