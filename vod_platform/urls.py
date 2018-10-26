from django.conf.urls import url
from django.urls import include
from rest_framework import routers

from .views import FilmViewSet

router = routers.DefaultRouter()
router.register(r'films', FilmViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls'))
]
