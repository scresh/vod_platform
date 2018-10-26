from rest_framework import viewsets
from . import serializers, models
from django.shortcuts import render


# salt for md5: E2MvtGg8Rs


# ViewSets define the view behavior.
class FilmViewSet(viewsets.ModelViewSet):
    queryset = models.Film.objects.all()
    serializer_class = serializers.FilmSerializer


class LanguageViewSet(viewsets.ModelViewSet):
    queryset = models.Language.objects.all()
    serializer_class = serializers.LanguageSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = models.Category.objects.all()
    serializer_class = serializers.CategorySerializer


class ActorViewSet(viewsets.ModelViewSet):
    queryset = models.Actor.objects.all()
    serializer_class = serializers.ActorSerializer


class SubtitlesViewSet(viewsets.ModelViewSet):
    queryset = models.Subtitles.objects.all()
    serializer_class = serializers.SubtitlesSerializers


def login(request):
    if request.method == 'POST':
        pass
    else:
        pass
