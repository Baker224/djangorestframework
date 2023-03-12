from django.shortcuts import render
from rest_framework import mixins
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from .models import MyUser
from .serializers import MyUserModelSerializer, MyUserModelSerializerV2

class MyUserModelViewSet(mixins.RetrieveModelMixin, mixins.CreateModelMixin,
                   mixins.UpdateModelMixin,
                   mixins.ListModelMixin,
                   GenericViewSet):
    # serializer_class = MyUserModelSerializer
    queryset = MyUser.objects.all()

    def get_serializer_class(self):
       if self.request.version == '2.0':
           return MyUserModelSerializerV2
       elif self.request.version == '1.0':
           return MyUserModelSerializer
       return MyUserModelSerializer

