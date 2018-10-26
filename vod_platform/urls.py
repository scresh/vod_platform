from django.conf.urls import url
from django.urls import include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register(r'films', views.FilmViewSet)
router.register(r'languages', views.LanguageViewSet)
router.register(r'categories', views.CategoryViewSet)
router.register(r'actors', views.ActorViewSet)
router.register(r'subtitles', views.SubtitlesViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls'))
]
