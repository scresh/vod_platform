from django.conf.urls import url, include
from rest_framework import routers
from films import views as film_views

router = routers.DefaultRouter()
router.register(r'films', film_views.FilmViewSet)
router.register(r'languages', film_views.LanguageViewSet)
router.register(r'categories', film_views.CategoryViewSet)
router.register(r'actors', film_views.ActorViewSet)
router.register(r'users', film_views.UserViewSet)


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),

]