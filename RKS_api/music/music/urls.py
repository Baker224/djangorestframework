from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from music_api.views import *

router = DefaultRouter()

router.register('album', AlbumAPIView)
router.register('artist', ArtistAPIView)
router.register('track', TrackAPIView)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('', AlbumTemp.as_view()),
    path('art/', AlbumTemp2.as_view()),

]
