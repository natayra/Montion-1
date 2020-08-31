from django.urls import path

from posts.views import ListPosts, RetrieveUpdateDestroyPostsView, \
    ListPostsLiked, ListPostsGivenUser

urlpatterns = [
    path('posts/', ListPosts.as_view()),
    path(
        'posts/<int:pk>/', RetrieveUpdateDestroyPostsView.as_view()
    ),
    path(
        'posts/likes/', ListPostsLiked.as_view()
    ),
    path('posts/user/<int:user_id>/', ListPostsGivenUser.as_view())
]
