from django.db import models

from django.conf import settings


class Friend(models.Model):
    STATUS = [(0, 'Pendent'), (1, 'Accepted')]
    status = models.CharField(choices=STATUS, default=STATUS[0], max_length=1)

    requester = models.ForeignKey(
        to=settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, related_name='fk_friend_requester_user')
    receiver = models.ForeignKey(
        to=settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, related_name='fk_friend_receiver_user')

    class Meta:
        unique_together = ('requester', 'receiver')

    def __str__(self):
        return f'{self.pk}: {self.requester, self.receiver}'
