from django.contrib.auth.models import AbstractUser
from django.db import models


class MyUser(AbstractUser):
    email = models.CharField("email adress", max_length=256, unique=True)
