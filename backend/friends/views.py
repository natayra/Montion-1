from django.contrib.auth import get_user_model
from django.core.mail import send_mail
from rest_framework.generics import GenericAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, CreateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from friends.models import Friend
from friends.serializers import FriendsSerializer

from django.db.models import Q

from posts.models import Post
from users.serializers import UserSerializer

User = get_user_model()


class SendFriendRequest(CreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = FriendsSerializer

    def post(self, request, user_id):
        search_user = User.objects.get(id=user_id)
        friendship = Friend.objects.filter(
            Q(requester=request.user.id) & Q(receiver=user_id) | Q(requester=user_id) & Q(receiver=request.user.id)).all()
        if len(friendship) == 0:
            serializer = self.get_serializer(
                data={'requester': request.user.id, 'receiver': user_id})
            serializer.is_valid(raise_exception=True)
            send_mail(
                'You have a new friend request',
                '{} {} sent you a friend request!'.format(self.request.user.first_name, self.request.user.last_name),
                'students@propulsionacademy.com',
                ['{}'.format(search_user.email)],
                fail_silently=False,
            )
            serializer.save()
        elif friendship[0].requester_id == request.user.id:
            return Response(data='Friend request already sent', status=400)
        else:
            return Response(data='You already have a pendent request from that user', status=400)
        return Response(status=200)


class RetrieveAcceptOrDeleteFriendsRequest(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Friend.objects.all()
    serializer_class = FriendsSerializer
    lookup_field = 'id'

    def patch(self, request, *args, **kwargs):
        search_user = Friend.objects.get(id=kwargs['id'])
        request.data['status'] = 1
        send_mail(
            'Your have a new friend!',
            '{} {} has accepted your friend request!'.format(self.request.user.first_name, self.request.user.last_name),
            'students@propulsionacademy.com',
            ['{}'.format(search_user.receiver.email)],
            fail_silently=False,
        )
        return self.partial_update(request, *args, **kwargs)


class ListOfFriends(ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_queryset(self):
        friends = Friend.objects.filter(
            Q(requester=self.request.user.id) | Q(receiver=self.request.user.id)).filter(Q(status=1)).all().values()
        friends_list \
            = list(map(lambda friendship: User.objects.get(id=friendship['receiver_id']) if friendship['requester_id'] == self.request.user.id else User.objects.get(id=friendship['requester_id']), friends))
        return friends_list


class ListPostsFriends(ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_queryset(self):
        friends = Friend.objects.filter(
            Q(requester=self.request.user.id) | Q(receiver=self.request.user.id)).filter(Q(status=1)).all().values()
        friends_list \
            = list(map(lambda friendship: User.objects.get(id=friendship['receiver_id']) if friendship['requester_id'] == self.request.user.id else User.objects.get(id=friendship['requester_id']), friends))
        posts = Post.objects.filter(user=friends_list[0].id).all().values()
        return posts
