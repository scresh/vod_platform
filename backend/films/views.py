from films import models, serializers
from rest_framework import generics, viewsets


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


class UserViewSet(viewsets.ModelViewSet):
    queryset = models.User.objects.all()
    serializer_class = serializers.UserSerializer
