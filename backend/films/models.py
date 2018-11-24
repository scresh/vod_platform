from django.db import models
from django.contrib.auth.models import User as DjangoUser


class Language(models.Model):
    name = models.CharField(max_length=16, unique=True)
    icon_filename = models.CharField(max_length=16)


class Category(models.Model):
    name = models.CharField(max_length=16)
    icon_filename = models.CharField(max_length=16)


class Actor(models.Model):
    first_name = models.CharField(max_length=16)
    last_name = models.CharField(max_length=16)
    photo_filename = models.CharField(max_length=16)


class Film(models.Model):
    title = models.CharField(max_length=32)
    info = models.CharField(max_length=256)
    description = models.TextField(max_length=2048)
    release_year = models.PositiveSmallIntegerField()

    language = models.ForeignKey(Language, related_name='films', on_delete=models.CASCADE)
    subtitles = models.ManyToManyField(Language, related_name='films_subtitles')

    length = models.PositiveSmallIntegerField()
    price = models.DecimalField(max_digits=4, decimal_places=2)

    category = models.ManyToManyField(Category, related_name='films')
    photo_filename = models.CharField(max_length=16)


class User(models.Model):
    user = models.OneToOneField(DjangoUser, on_delete=models.CASCADE)
    films = models.ManyToManyField(Film)
