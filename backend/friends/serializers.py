from rest_framework import serializers

from friends.models import Friend


class FriendsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Friend
        fields = ['requester', 'receiver', 'status']
