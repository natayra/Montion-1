from django.contrib import admin
from django.urls import path, include
from rest_framework.documentation import include_docs_urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('backend/api/docs/', include_docs_urls(
        title='Motion Backend', public=True, permission_classes=[])),
    path('backend/api/users/', include('users.urls')),
    path('backend/api/social/', include('posts.urls')),
    path('backend/api/social/', include('friends.urls')),
    path('backend/api/social/', include('likes.urls')),
    path('backend/api/social/', include('followers.urls')),
    path('backend/api/auth/', include('registration.urls')),
]
