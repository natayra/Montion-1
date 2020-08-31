from rest_framework.generics import GenericAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from likes.models import Like
from likes.serializers import LikeSerializer


class PostLikes(GenericAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = LikeSerializer

    def post(self, request, post_id):
        likes = Like.objects.filter(
            postId=post_id, sender=request.user.id).all()
        if len(likes) == 0:
            serializer = self.get_serializer(
                data={'postId': post_id, 'sender': request.user.id})
            serializer.is_valid(raise_exception=True)
            serializer.save()
        else:
            likes[0].delete()
        return Response(status=200)
