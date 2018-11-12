from films import models, serializers
from rest_framework import generics, viewsets


#
# class FilmList(generics.ListCreateAPIView):
#     queryset = models.Film.objects.all()
#     serializer_class = serializers.FilmSerializer
#
#
# class FilmDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = models.Film.objects.all()
#     serializer_class = serializers.FilmSerializer
#
#
# class LanguageList(generics.ListCreateAPIView):
#     queryset = models.Language.objects.all()
#     serializer_class = serializers.LanguageSerializer
#
#
# class LanguageDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = models.Language.objects.all()
#     serializer_class = serializers.LanguageSerializer
#
#
# class CategoryList(generics.ListCreateAPIView):
#     queryset = models.Category.objects.all()
#     serializer_class = serializers.LanguageSerializer
#
#
# class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = models.Category.objects.all()
#     serializer_class = serializers.CategorySerializer
#
#
# class ActorList(generics.ListCreateAPIView):
#     queryset = models.Actor.objects.all()
#     serializer_class = serializers.ActorSerializer
#
#
# class ActorDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = models.Actor.objects.all()
#     serializer_class = serializers.ActorSerializer
#
#
# class FilmCategoryList(generics.ListCreateAPIView):
#     queryset = models.FilmCategory.objects.all()
#     serializer_class = serializers.FilmCategorySerializer
#
#
# class FilmCategoryDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = models.FilmCategory.objects.all()
#     serializer_class = serializers.FilmCategorySerializer
#
#
# class FilmActorList(generics.ListCreateAPIView):
#     queryset = models.FilmActor.objects.all()
#     serializer_class = serializers.FilmActorSerializer
#
#
# class FilmActorDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = models.FilmActor.objects.all()
#     serializer_class = serializers.FilmActorSerializer
#
#
# class SubtitlesList(generics.ListCreateAPIView):
#     queryset = models.Subtitles.objects.all()
#     serializer_class = serializers.SubtitlesSerializer
#
#
# class SubtitlesDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = models.Subtitles.objects.all()
#     serializer_class = serializers.SubtitlesSerializer
#
#
# class UserFilmList(generics.ListCreateAPIView):
#     queryset = models.UserFilm.objects.all()
#     serializer_class = serializers.UserFilmSerializer
#
#
# class UserFilmDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = models.UserFilm.objects.all()
#     serializer_class = serializers.UserFilmSerializer


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


# class FilmCategoryViewSet(viewsets.ModelViewSet):
#     queryset = models.FilmCategory.objects.all()
#     serializer_class = serializers.FilmCategorySerializer


class FilmActorViewSet(viewsets.ModelViewSet):
    queryset = models.FilmActor.objects.all()
    serializer_class = serializers.FilmActorSerializer


class SubtitlesViewSet(viewsets.ModelViewSet):
    queryset = models.Subtitles.objects.all()
    serializer_class = serializers.SubtitlesSerializer


class UserFilmViewSet(viewsets.ModelViewSet):
    queryset = models.UserFilm.objects.all()
    serializer_class = serializers.UserFilmSerializer
