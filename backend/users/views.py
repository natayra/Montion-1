from rest_framework import filters
from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from users.models import User
from users.serializers import UserSerializer


class ListUsers(ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerializer
    search_fields = ['email', 'username', 'first_name', 'last_name']
    filter_backends = (filters.SearchFilter,)


class RetrieveUsersView(RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()

    def get(self):
        me = User.objects.get(
            id=self.request.user.id)
        return Response(me)


class Me(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
