from rest_framework import viewsets
from .serializers import FilmSerializer
from .models import Film, Language, Category, FilmCategory
from django.shortcuts import render


# salt for md5: E2MvtGg8Rs


# ViewSets define the view behavior.
class FilmViewSet(viewsets.ModelViewSet):
    queryset = Film.objects.all()
    serializer_class = FilmSerializer


def film_list(request):
    all_films = Film.objects.all().values()
    for i in range(len(all_films)):
        all_films[i]['language'] = Language.objects.all().get(id=all_films[i]['language_id_id']).name

        all_films[i]['category'] = Category.objects.all().get(
            id=FilmCategory.objects.all().get(film_id_id=all_films[i]['id']).category_id.id
        ).name
        del all_films[i]['language_id_id']
        del all_films[i]['description']

    return render(request, 'list.html', {'film_list': all_films})


def login(request):
    if request.method == 'POST':
        pass
    else:
        pass
