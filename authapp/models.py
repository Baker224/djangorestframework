from django.contrib.auth.base_user import AbstractBaseUser
from django.db import models

class MyUser(AbstractBaseUser):
    email = models.EmailField(verbose_name='email',
                              max_length=255,
                              unique=True)
    user_name = models.CharField(max_length=100)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)