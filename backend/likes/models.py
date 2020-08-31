from django.db import models
from posts.models import Post

from django.conf import settings


class Like(models.Model):
    sender = models.ForeignKey(
        to=settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, related_name='fk_like_sender_user')
    postId = models.ForeignKey(
        to=Post, on_delete=models.SET_NULL, null=True, related_name='fk_like_post')

    class Meta:
        unique_together = ('postId', 'sender',)

    def __str__(self):
        return f'{self.pk}: {self.postId, self.sender}'
