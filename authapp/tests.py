from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient
from .views import MyUserModelViewSet
from .models import MyUser

class UserTestCase(TestCase):




    def test_name(self):
        factory = APIRequestFactory()
        request = factory.get('/api/MyUsers/')
        user = MyUser.objects.create_superuser(username='admin', password='admin')
        force_authenticate(request, user=user )
        view = MyUserModelViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)


