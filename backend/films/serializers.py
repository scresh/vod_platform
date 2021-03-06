from rest_framework import serializers
from . import models


class LanguageListCreateUpdateDestroySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Language
        fields = ('id', 'name', 'icon_url')


class LanguageRetrieveSerializer(serializers.ModelSerializer):
    films = serializers.StringRelatedField(many=True)

    class Meta:
        model = models.Language
        fields = ('id', 'name', 'icon_url', 'films')


class CategoryListCreateUpdateDestroySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Category
        fields = ('id', 'name')


class CategoryRetrieveSerializer(serializers.ModelSerializer):
    films = serializers.StringRelatedField(many=True)

    class Meta:
        model = models.Category
        fields = ('id', 'name', 'films')


class ActorListCreateUpdateDestroySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Actor
        fields = ('id', 'first_name', 'last_name', 'photo_url')


class ActorRetrieveSerializer(serializers.ModelSerializer):
    films = serializers.StringRelatedField(many=True)

    class Meta:
        model = models.Actor
        fields = ('id', 'first_name', 'last_name', 'photo_url', 'films')


class FilmListSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField(many=True)

    class Meta:
        model = models.Film
        fields = (
            'id', 'title', 'release_year', 'language',
            'length', 'price', 'category', 'photo_url'
        )

        depth = 1


class FilmRetrieveSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Film
        fields = (
            'id', 'title', 'info', 'description', 'actor',
            'release_year', 'language', 'subtitles',
            'length', 'price', 'category', 'photo_url',
        )
        depth = 1


class FilmCreateUpdateDestroySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Film
        fields = (
            'id', 'title', 'info', 'description', 'actor',
            'release_year', 'language', 'subtitles',
            'length', 'price', 'category', 'photo_url'
        )


class UserListRetrieveSerializer(serializers.ModelSerializer):
    films = serializers.StringRelatedField(many=True)

    class Meta:
        model = models.User
        fields = ('id', 'user', 'films', 'balance')
        depth = 1


class UserCreateUpdateDestroySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = ('id', 'user', 'films', 'balance')


