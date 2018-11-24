from django.conf.urls import url, include
from django.urls import path
from films import views

urlpatterns = [
    path("films/", views.FilmListView.as_view(), name="film_list"),
    path("films/create/", views.FilmCreateView.as_view(), name="film_create"),
    path("films/<int:pk>/", views.FilmRetrieveView.as_view(), name="film_details"),
    path("films/<int:pk>/update/", views.FilmUpdateView.as_view(), name="film_update"),
    path("films/<int:pk>/delete/", views.FilmDestroyView.as_view(), name="film_delete"),

    path("languages/", views.LanguageListView.as_view(), name="language_list"),
    path("languages/create/", views.LanguageCreateView.as_view(), name="language_create"),
    path("languages/<int:pk>/", views.LanguageRetrieveView.as_view(), name="language_details"),
    path("languages/<int:pk>/update/", views.LanguageUpdateView.as_view(), name="language_update"),
    path("languages/<int:pk>/delete/", views.LanguageDestroyView.as_view(), name="language_delete"),

    path("categories/", views.CategoryListView.as_view(), name="category_list"),
    path("categories/create/", views.CategoryCreateView.as_view(), name="category_create"),
    path("categories/<int:pk>/", views.CategoryRetrieveView.as_view(), name="category_details"),
    path("categories/<int:pk>/update/", views.CategoryUpdateView.as_view(), name="category_update"),
    path("categories/<int:pk>/delete/", views.CategoryDestroyView.as_view(), name="category_delete"),

    path("actors/", views.ActorListView.as_view(), name="actor_list"),
    path("actors/create/", views.ActorCreateView.as_view(), name="actor_create"),
    path("actors/<int:pk>/", views.ActorRetrieveView.as_view(), name="actor_details"),
    path("actors/<int:pk>/update/", views.ActorUpdateView.as_view(), name="actor_update"),
    path("actors/<int:pk>/delete/", views.ActorDestroyView.as_view(), name="actor_delete"),

    path("users/", views.UserListView.as_view(), name="user_list"),
    path("users/create/", views.UserCreateView.as_view(), name="user_create"),
    path("users/<int:pk>/", views.UserRetrieveView.as_view(), name="user_details"),
    path("users/<int:pk>/update/", views.UserUpdateView.as_view(), name="user_update"),
    path("users/<int:pk>/delete/", views.UserDestroyView.as_view(), name="user_delete"),

    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),

]