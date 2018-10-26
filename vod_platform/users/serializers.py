from django.contrib.auth.models import User, Group
from rest_framework import serializers
from films.models import UserFilm


class UserSerializer(serializers.HyperlinkedModelSerializer):
    films = serializers.PrimaryKeyRelatedField(many=True, queryset=UserFilm.objects.all())

    class Meta:
        model = User
        fields = ('username', 'email', 'films')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')
