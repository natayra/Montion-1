from rest_framework import serializers

from users.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name', 'username', 'location', 'about_me']


class UserRegistration(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'code', 'first_name', 'last_name', 'username', 'password', 'password_repeat']


class PasswordResetSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email']


class PasswordResetValidationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['code', 'email', 'password', 'password_repeat']
