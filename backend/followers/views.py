from django.core.mail import send_mail
from rest_framework.generics import GenericAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from followers.models import Follow
from followers.serializers import PostFollowingSerializer
from posts.models import Post
from users.serializers import UserSerializer, User


class PostFollowing(GenericAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = PostFollowingSerializer

    def post(self, request, user_id, **kwargs):
        search_user = User.objects.get(id=user_id)
        following = Follow.objects.filter(
            sender=request.user.id, receiver=user_id).all()
        if len(following) == 0:
            serializer = self.get_serializer(
                data={'sender': request.user.id, 'receiver': user_id})
            serializer.is_valid(raise_exception=True)
            send_mail(
                'You have a new follower!',
                '{} {} is following you now!'.format(self.request.user.first_name, self.request.user.last_name),
                'students@propulsionacademy.com',
                ['{}'.format(search_user.email)],
                fail_silently=False,
            )
            serializer.save()
        else:
            following[0].delete()
        return Response(status=200)


class ListUsersFollowies(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer

    def get_queryset(self):
        return User.objects.filter(fk_follow_sender_user__sender=self.request.user.id)


class ListUsersFollowers(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer

    def get_queryset(self):
        return User.objects.filter(fk_follow_receiver_user__receiver=self.request.user.id)


class ListPostsFollowing(GenericAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer

    def get(self, request):
        following = User.objects.filter(fk_follow_receiver_user__sender=request.user.id)
        id_following = list(map(lambda foll: foll.id, following))
        posts = Post.objects.filter(user_id__in=id_following).all().values()
        return Response(posts)
