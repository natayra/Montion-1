from django.db import models
from django.conf import settings


class Post(models.Model):
    user = models.ForeignKey(
        to=settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, related_name='posts')

    content = models.CharField(
        max_length=1500
    )

    images = models.ImageField(
        blank=True,
        null=True
    )

    created = models.DateField(
        auto_now_add=True,
        blank=True,
        null=True
    )

    edited = models.DateField(
        auto_now_add=True,
        blank=True,
        null=True
    )

    shared_post = models.ForeignKey(
        'self', on_delete=models.CASCADE,
        blank=True,
        null=True,
    )

    def __str__(self):
        return f'{self.pk}'
