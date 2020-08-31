from django.core.mail import send_mail
from django.db.models import Q
from rest_framework import filters
from rest_framework.generics import GenericAPIView, \
    RetrieveUpdateDestroyAPIView, ListCreateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from friends.models import Friend
from posts.models import Post
from posts.serializers import PostSerializer
from users.models import User


class ListPosts(ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    search_fields = ['content']
    filter_backends = (filters.SearchFilter,)

    def post(self, request, *args, **kwargs):
        friendships = Friend.objects.filter(Q(requester=request.user.id) | Q(receiver=request.user.id)).filter(
            Q(status=1)).all().values()
        a = list(map(
            lambda friendship: friendship['receiver_id'] if friendship['requester_id'] == request.user.id else
            friendship['requester_id'],
            friendships
        ))
        search_user = User.objects.filter(id__in=a).all().values()
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        for e in search_user:
            send_mail(
                'Your friend has made a post!',
                '{} {} has made a post! Go check it out!'.format(request.user.first_name, request.user.last_name),
                'students@propulsionacademy.com',
                ['{}'.format(e['email'])],
                fail_silently=False,
            )
        serializer.save(user=request.user)
        return Response(serializer.data)


class RetrieveUpdateDestroyPostsView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = PostSerializer
    queryset = Post.objects.all()
    lookup_field_kwarg = 'id'

    def get_object(self):
        return PostSerializer


class ListPostsLiked(GenericAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = PostSerializer

    def get(self, request):
        posts = Post.objects.filter(
            fk_like_post__sender=request.user.id).all().values()
        return Response(posts)


class ListPostsGivenUser(GenericAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = PostSerializer

    def get(self, request, user_id, **kwargs):
        posts = Post.objects.filter(
            user_id=user_id).all().values()
        return Response(posts)


class SearchForPost(GenericAPIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, search_string):
        posts = Post.objects.all()
        search = request.query_params.get(search_string)
        if search:
            posts = Post.filter(ref__contains=search)
        serializer = self.get_serializer(posts, many=True)
        return Response(serializer.data)