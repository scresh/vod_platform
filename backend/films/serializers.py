from rest_framework import serializers
from . import models


class LanguageListCreateUpdateDestroySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Language
        fields = ('id', 'name', 'icon_filename')


class LanguageRetrieveSerializer(serializers.ModelSerializer):
    films = serializers.StringRelatedField(many=True)

    class Meta:
        model = models.Language
        fields = ('id', 'name', 'icon_filename', 'films')


class CategoryListCreateUpdateDestroySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Category
        fields = ('id', 'name', 'icon_filename')


class CategoryRetrieveSerializer(serializers.ModelSerializer):
    films = serializers.StringRelatedField(many=True)

    class Meta:
        model = models.Category
        fields = ('id', 'name', 'icon_filename', 'films')


class ActorListCreateUpdateDestroySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Actor
        fields = ('id', 'first_name', 'last_name', 'photo_filename')


class ActorRetrieveSerializer(serializers.ModelSerializer):
    films = serializers.StringRelatedField(many=True)

    class Meta:
        model = models.Actor
        fields = ('id', 'first_name', 'last_name', 'photo_filename', 'films')


class FilmListSerializer(serializers.ModelSerializer):
    # language = serializers.StringRelatedField()
    category = serializers.StringRelatedField(many=True)

    class Meta:
        model = models.Film
        fields = (
            'id', 'title', 'info', 'release_year', 'language',
            'length', 'price', 'category', 'photo_filename'
        )
        depth = 1


class FilmRetrieveSerializer(serializers.ModelSerializer):
    language = serializers.StringRelatedField()
    subtitles = serializers.StringRelatedField(many=True)
    category = serializers.StringRelatedField(many=True)
    actor = serializers.StringRelatedField(many=True)

    class Meta:
        model = models.Film
        fields = (
            'id', 'title', 'info', 'description', 'actor',
            'release_year', 'language', 'subtitles',
            'length', 'price', 'category', 'photo_filename',
        )


class FilmCreateUpdateDestroySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Film
        fields = (
            'id', 'title', 'info', 'description', 'actor',
            'release_year', 'language', 'subtitles',
            'length', 'price', 'category', 'photo_filename'
        )


class UserRetrieveSerializer(serializers.ModelSerializer):
    films = serializers.StringRelatedField(many=True)

    class Meta:
        model = models.User
        fields = ('id', 'user', 'films', 'balance')


class UserListCreateUpdateDestroySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = ('id', 'user', 'balance')

