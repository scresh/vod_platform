from rest_framework import serializers
from . import models


class LanguageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Language
        fields = ('id', 'name', 'icon_name')


class FilmSerializer(serializers.HyperlinkedModelSerializer):
    language_id = LanguageSerializer()
    release_year = serializers.SerializerMethodField('get_year')

    class Meta:
        model = models.Film
        fields = ('id', 'title', 'description', 'release_year', 'language_id', 'length', 'price')

    @staticmethod
    def get_year(obj):
        return str(obj.release_date).split('-')[0]


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Category
        fields = ('id', 'name')


class ActorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Actor
        fields = ('id', 'first_name', 'last_name')


class FilmCategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.FilmCategory
        fields = ('id', 'film_id', 'category_id')


class FilmActorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.FilmActor
        fields = ('id', 'film_id', 'actor_id')


class SubtitlesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Subtitles
        fields = ('id', 'language_id', 'film_id')


class UserFilmSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.UserFilm
        fields = ('id', 'user_id', 'film_id')
