from django.db import models

from users.models import User


class Follow(models.Model):
    sender = models.ForeignKey(
        to=User, on_delete=models.SET_NULL, null=True, related_name='fk_follow_sender_user')
    receiver = models.ForeignKey(
        to=User, on_delete=models.SET_NULL, null=True, related_name='fk_follow_receiver_user')

    class Meta:
        unique_together = ('sender', 'receiver')

    def __str__(self):
        return f'{self.pk}: {self.sender, self.receiver}'
