from django.urls import path

from followers.views import PostFollowing, ListUsersFollowies, \
    ListUsersFollowers, ListPostsFollowing

urlpatterns = [
    path(
        'followers/toggle-follow/<int:user_id>/', PostFollowing.as_view()
    ),
    path('followers/followers/', ListUsersFollowers.as_view()),
    path('followers/following/', ListUsersFollowies.as_view()),
    path('posts/following/', ListPostsFollowing.as_view()),
]
