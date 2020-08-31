from django.urls import path

from users.views import ListUsers, Me, RetrieveUsersView

urlpatterns = [
    path('', ListUsers.as_view()),
    path(
        '<int:pk>/', RetrieveUsersView.as_view()
    ),
    path(
        'me/', Me.as_view()
    ),
]
