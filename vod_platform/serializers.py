from rest_framework import serializers
from . import models


class FilmSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Film
        fields = ('id', 'title', 'description', 'release_date', 'language_id', 'length', 'price')


class LanguageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Language
        fields = ('id', 'name')


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Category
        fields = ('id', 'name')


class ActorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Actor
        fields = ('id', 'first_name', 'last_name')


class SubtitlesSerializers(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Subtitles
        fields = ('id', 'language_id', 'film_id')
