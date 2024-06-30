from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, APITestCase, force_authenticate, APIClient
from .views import TODOModelViewSet
from .models import TODO, Project
from authapp.models import MyUser
from mixer.backend.django import mixer

class TODOClientTestCase(APITestCase):

    def setUp(self):
        self.client = APIClient()
        self.user = MyUser.objects.create_superuser (username='admin', password='admin')
        self.TODO = mixer.blend(TODO)
        self.project = mixer.blend(Project)

    def test_todo(self):
        self.client.force_authenticate(self.user)
        response = self.client.get('/api/TODO/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_project(self):
        self.client.force_authenticate(self.user)
        response = self.client.get('/api/Project/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)


