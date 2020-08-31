from rest_framework import serializers

from followers.models import Follow


class PostFollowingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Follow
        fields = ['sender', 'receiver']
