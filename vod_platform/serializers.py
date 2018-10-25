from rest_framework import serializers
from .models import Film


class FilmSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Film
        fields = ('title', 'description', 'price')