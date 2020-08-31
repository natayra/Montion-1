from django.urls import path

from likes.views import PostLikes

urlpatterns = [
    path(
        'posts/toggle-like/<post_id>/', PostLikes.as_view()
    )
]
