from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name', 'password']

    email = models.EmailField(unique=True)
    username = models.CharField(
        max_length=200,
        unique=True
    )

    first_name = models.CharField(
        max_length=200,
    )

    last_name = models.CharField(
        max_length=200,
    )

    is_staff = models.BooleanField(
        default=False,
    )

    is_active = models.BooleanField(
        default=True,
    )

    date_joined = models.DateTimeField(
        auto_now_add=True
    )

    location = models.CharField(
        max_length=200,
        blank=True
    )

    about_me = models.CharField(
        max_length=1000,
        blank=True
    )

    job = models.CharField(
        max_length=200,
        blank=True
    )

    password = models.CharField(
        max_length=200,
    )

    code = models.CharField(
        max_length=200,
        null=True
    )

    password_repeat = models.CharField(
        max_length=200,
        null=True
    )

    def __str__(self):
        return self.email
