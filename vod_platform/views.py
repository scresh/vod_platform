from . import models
from django.shortcuts import render


def film_list(request):
    if models.Language.objects.filter(name='polski').exists():
        print('Polski już istnieje')
        lang_id = models.Language.objects.get(name='polski')
    else:
        polish = models.Language(name='polski')
        polish.save()
        lang_id = polish

    f = models.Film(
        title='Przeminęło z wiatrem 5',
        description='Tak',
        release_date='2006-10-25',
        language_id=lang_id,
        length=127,
        price=10,
    )
    f.save()

    all_films = models.Film.objects.all()

    return render(request, 'list.html', {'film_list': all_films})


