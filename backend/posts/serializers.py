from rest_framework import serializers
from posts.models import Post


class PostSerializer(serializers.ModelSerializer):
    count_of_likes = serializers.SerializerMethodField()

    def get_count_of_likes(self, Post):
        count = 0
        likes = Post.fk_like_post.all().values()
        for like in likes:
            count += 1
        return count

    class Meta:
        model = Post
        fields = ['id', 'content', 'images', 'shared_post', 'user', 'created', 'count_of_likes']
