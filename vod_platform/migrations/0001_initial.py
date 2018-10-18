# Generated by Django 2.1.2 on 2018-10-18 10:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Actor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=32)),
                ('last_name', models.CharField(max_length=32)),
            ],
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=64)),
            ],
        ),
        migrations.CreateModel(
            name='Film',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=128)),
                ('description', models.CharField(max_length=1024)),
                ('release_date', models.DateField()),
                ('length', models.SmallIntegerField()),
                ('price', models.FloatField(default=2.5)),
            ],
        ),
        migrations.CreateModel(
            name='FilmActor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('actor_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='vod_platform.Actor')),
                ('film_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='vod_platform.Film')),
            ],
        ),
        migrations.CreateModel(
            name='FilmCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='vod_platform.Category')),
                ('film_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='vod_platform.Film')),
            ],
        ),
        migrations.CreateModel(
            name='Group',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=16)),
            ],
        ),
        migrations.CreateModel(
            name='Language',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=16, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Permissions',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('add_film', models.BooleanField()),
                ('edit_film', models.BooleanField()),
                ('delete_film', models.BooleanField()),
                ('can_login', models.BooleanField()),
                ('edit_balance', models.BooleanField()),
                ('group_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='vod_platform.Group')),
            ],
        ),
        migrations.CreateModel(
            name='Subtitles',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('film_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='vod_platform.Film')),
                ('language_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='vod_platform.Language')),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=32)),
                ('last_name', models.CharField(max_length=32)),
                ('username', models.CharField(max_length=16, unique=True)),
                ('password', models.CharField(max_length=32)),
                ('email', models.EmailField(max_length=64, unique=True)),
                ('balance', models.FloatField(default=10.0)),
                ('group_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='vod_platform.Group')),
            ],
        ),
        migrations.CreateModel(
            name='UserFilm',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('film_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='vod_platform.Film')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='vod_platform.User')),
            ],
        ),
        migrations.AddField(
            model_name='film',
            name='language_id',
            field=models.ForeignKey(on_delete=models.SET(0), to='vod_platform.Language'),
        ),
    ]
