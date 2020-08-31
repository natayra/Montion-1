from django.urls import path
from rest_framework_simplejwt import views as jwt_views

from registration.views import RegistrationEmail, RegistrationValidation, ChangePasswordEmail, ChangePasswordValidation

urlpatterns = [
    path('registration/validation/', RegistrationValidation.as_view()),
    path('registration/', RegistrationEmail.as_view()),
    path('token/', jwt_views.TokenObtainPairView.as_view()),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view()),
    path('token/verify/', jwt_views.TokenVerifyView.as_view()),
    path('password-reset/', ChangePasswordEmail.as_view()),
    path('password-reset/validation/', ChangePasswordValidation.as_view()),
    ]
