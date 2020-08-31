from django.urls import path

from friends.views import SendFriendRequest, RetrieveAcceptOrDeleteFriendsRequest, ListOfFriends, ListPostsFriends

urlpatterns = [
    path('friends/', ListOfFriends.as_view()),
    path('posts/friends/', ListPostsFriends.as_view()),
    path(
        'friends/request/<int:user_id>/', SendFriendRequest.as_view()
    ),
    path('friends/requests/<int:id>/', RetrieveAcceptOrDeleteFriendsRequest.as_view())
    ]
