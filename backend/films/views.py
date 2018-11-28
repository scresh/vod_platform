from films import models, serializers
from rest_framework import generics
import django_filters.rest_framework


# Language views
class LanguageListView(generics.ListAPIView):
    queryset = models.Language.objects.all()
    serializer_class = serializers.LanguageListCreateUpdateDestroySerializer


class LanguageRetrieveView(generics.RetrieveAPIView):
    queryset = models.Language.objects.all()
    serializer_class = serializers.LanguageRetrieveSerializer


class LanguageCreateView(generics.CreateAPIView):
    queryset = models.Language.objects.all()
    serializer_class = serializers.LanguageListCreateUpdateDestroySerializer


class LanguageUpdateView(generics.UpdateAPIView):
    queryset = models.Language.objects.all()
    serializer_class = serializers.LanguageListCreateUpdateDestroySerializer


class LanguageDestroyView(generics.DestroyAPIView):
    queryset = models.Language.objects.all()
    serializer_class = serializers.LanguageListCreateUpdateDestroySerializer


# Category views
class CategoryListView(generics.ListAPIView):
    queryset = models.Category.objects.all()
    serializer_class = serializers.CategoryListCreateUpdateDestroySerializer


class CategoryRetrieveView(generics.RetrieveAPIView):
    queryset = models.Category.objects.all()
    serializer_class = serializers.CategoryRetrieveSerializer


class CategoryCreateView(generics.CreateAPIView):
    queryset = models.Category.objects.all()
    serializer_class = serializers.CategoryListCreateUpdateDestroySerializer


class CategoryUpdateView(generics.UpdateAPIView):
    queryset = models.Category.objects.all()
    serializer_class = serializers.CategoryListCreateUpdateDestroySerializer


class CategoryDestroyView(generics.DestroyAPIView):
    queryset = models.Category.objects.all()
    serializer_class = serializers.CategoryListCreateUpdateDestroySerializer


# Actor views
class ActorListView(generics.ListAPIView):
    queryset = models.Actor.objects.all()
    serializer_class = serializers.ActorListCreateUpdateDestroySerializer


class ActorRetrieveView(generics.RetrieveAPIView):
    queryset = models.Actor.objects.all()
    serializer_class = serializers.ActorRetrieveSerializer


class ActorCreateView(generics.CreateAPIView):
    queryset = models.Actor.objects.all()
    serializer_class = serializers.ActorListCreateUpdateDestroySerializer


class ActorUpdateView(generics.UpdateAPIView):
    queryset = models.Actor.objects.all()
    serializer_class = serializers.ActorListCreateUpdateDestroySerializer


class ActorDestroyView(generics.DestroyAPIView):
    queryset = models.Actor.objects.all()
    serializer_class = serializers.ActorListCreateUpdateDestroySerializer


# Film views
class FilmListView(generics.ListAPIView):
    queryset = models.Film.objects.all()
    serializer_class = serializers.FilmListSerializer
    filter_backends = (django_filters.rest_framework.DjangoFilterBackend,)
    filter_fields = ('release_year', 'title')


class FilmRetrieveView(generics.RetrieveAPIView):
    queryset = models.Film.objects.all()
    serializer_class = serializers.FilmRetrieveSerializer


class FilmCreateView(generics.CreateAPIView):
    queryset = models.Film.objects.all()
    serializer_class = serializers.FilmCreateUpdateDestroySerializer


class FilmUpdateView(generics.UpdateAPIView):
    queryset = models.Film.objects.all()
    serializer_class = serializers.FilmCreateUpdateDestroySerializer


class FilmDestroyView(generics.DestroyAPIView):
    queryset = models.Film.objects.all()
    serializer_class = serializers.FilmCreateUpdateDestroySerializer


class UserListView(generics.ListAPIView):
    queryset = models.User.objects.all()
    serializer_class = serializers.UserListRetrieveSerializer


class UserRetrieveView(generics.ListAPIView):
    queryset = models.User.objects.all()
    serializer_class = serializers.UserListRetrieveSerializer


class UserCreateView(generics.CreateAPIView):
    queryset = models.User.objects.all()
    serializer_class = serializers.UserCreateUpdateDestroySerializer


class UserUpdateView(generics.UpdateAPIView):
    queryset = models.User.objects.all()
    serializer_class = serializers.UserCreateUpdateDestroySerializer


class UserDestroyView(generics.DestroyAPIView):
    queryset = models.User.objects.all()
    serializer_class = serializers.UserCreateUpdateDestroySerializer
