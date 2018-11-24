from rest_framework import serializers
from . import models


class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Language
        fields = ('id', 'name', 'icon_filename')


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Category
        fields = ('id', 'name', 'icon_filename')


class ActorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Actor
        fields = ('id', 'first_name', 'last_name', 'photo_filename')


class FilmSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Film
        fields = (
            'id', 'title', 'info', 'description',
            'release_year', 'language', 'subtitles',
            'length', 'price', 'category', 'photo_filename'
        )


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = ('id', 'user', 'films')
