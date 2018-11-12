from django.db import models
from django.contrib.auth.models import User


class Language(models.Model):
    name = models.CharField(max_length=16, null=True, unique=True)
    icon_name = models.CharField(max_length=16)

    class Meta:
        ordering = ('name',)


class Category(models.Model):
    name = models.CharField(max_length=64)

    class Meta:
        ordering = ('name',)


class Actor(models.Model):
    first_name = models.CharField(max_length=32)
    last_name = models.CharField(max_length=32)

    class Meta:
        ordering = ('last_name', 'first_name')


class Film(models.Model):
    title = models.CharField(max_length=128)
    description = models.CharField(max_length=1024)
    release_date = models.DateField()
    language_id = models.ForeignKey(Language, related_name='films', on_delete=models.SET(0))
    length = models.SmallIntegerField()
    price = models.FloatField(default=2.5)

    category = models.ManyToManyField(Category, related_name='film')

    class Meta:
        ordering = ('id',)


# class FilmCategory(models.Model):
#     film_id = models.ForeignKey(Film, related_name='categories', on_delete=models.CASCADE)
#     category_id = models.ForeignKey(Category, related_name='films', on_delete=models.CASCADE)
#
#     class Meta:
#         ordering = ('category_id',)


class FilmActor(models.Model):
    film_id = models.ForeignKey(Film, on_delete=models.CASCADE)
    actor_id = models.ForeignKey(Actor, on_delete=models.CASCADE)

    class Meta:
        ordering = ('actor_id',)


class UserFilm(models.Model):
    user_id = models.ForeignKey(User, related_name='films', on_delete=models.CASCADE)
    film_id = models.ForeignKey(Film, on_delete=models.CASCADE)

    class Meta:
        ordering = ('user_id',)


class Subtitles(models.Model):
    language_id = models.ForeignKey(Language, on_delete=models.CASCADE)
    film_id = models.ForeignKey(Film, on_delete=models.CASCADE)

    class Meta:
        ordering = ('film_id',)
