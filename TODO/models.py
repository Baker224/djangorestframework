from authapp.models import MyUser
from django.db import models

class Project (models.Model):
    title = models.CharField(max_length= 64)
    repo = models.CharField(max_length=64)
    users = models.ManyToManyField(MyUser)

class TODO (models.Model):
    project = models.ForeignKey(Project, on_delete= models.CASCADE)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    creater = models.ForeignKey(MyUser, on_delete= models.CASCADE)
    is_active = models.BooleanField(default= True)

