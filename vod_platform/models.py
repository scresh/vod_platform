from django.db import models


class Group(models.Model):
    name = models.CharField(max_length=16)


class Permissions(models.Model):
    group_id = models.ForeignKey(Group, on_delete=models.CASCADE)
    add_film = models.BooleanField()
    edit_film = models.BooleanField()
    delete_film = models.BooleanField()
    can_login = models.BooleanField()
    edit_balance = models.BooleanField()


class Language(models.Model):
    name = models.CharField(max_length=16, null=True, unique=True)


class Category(models.Model):
    name = models.CharField(max_length=64)


class Actor(models.Model):
    first_name = models.CharField(max_length=32)
    last_name = models.CharField(max_length=32)


class Film(models.Model):
    title = models.CharField(max_length=128)
    description = models.CharField(max_length=1024)
    release_date = models.DateField()
    language_id = models.ForeignKey(Language, on_delete=models.SET(0))
    length = models.SmallIntegerField()
    price = models.FloatField(default=2.5)


class FilmCategory(models.Model):
    film_id = models.ForeignKey(Film, on_delete=models.CASCADE)
    category_id = models.ForeignKey(Category, on_delete=models.CASCADE)


class FilmActor(models.Model):
    film_id = models.ForeignKey(Film, on_delete=models.CASCADE)
    actor_id = models.ForeignKey(Actor, on_delete=models.CASCADE)


class User(models.Model):
    first_name = models.CharField(max_length=32)
    last_name = models.CharField(max_length=32)
    username = models.CharField(max_length=16, unique=True)
    password = models.CharField(max_length=32)
    email = models.EmailField(max_length=64, unique=True)
    balance = models.FloatField(default=10.0)
    group_id = models.ForeignKey(Group, on_delete=models.CASCADE)


class UserFilm(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    film_id = models.ForeignKey(Film, on_delete=models.CASCADE)


class Subtitles(models.Model):
    language_id = models.ForeignKey(Language, on_delete=models.CASCADE)
    film_id = models.ForeignKey(Film, on_delete=models.CASCADE)


