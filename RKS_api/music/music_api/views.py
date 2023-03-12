from rest_framework.renderers import TemplateHTMLRenderer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from .models import *
from .serializers import *


class AlbumAPIView(ModelViewSet):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer

    def get_queryset(self):
        name = self.request.query_params.get('name', None)
        if name:
            return Album.objects.filter(name__contains=name)
        return Album.objects.all()


class ArtistAPIView(ModelViewSet):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer

    def get_queryset(self):
        artist = self.request.query_params.get('artist', None)
        if artist:
            return Artist.objects.filter(artist__contains=artist)
        return Artist.objects.all()


class TrackAPIView(ModelViewSet):
    queryset = Track.objects.all()
    serializer_class = TrackSerializer

    def get_queryset(self):
        track = self.request.query_params.get('track', None)
        if track:
            return Track.objects.filter(track__contains=track)
        return Track.objects.all()


class AlbumTemp(APIView):
    renderer_classes = [TemplateHTMLRenderer]
    template_name = 'music_api/index.html'

    def get(self, request, ):
        album = Album.objects.filter().order_by('name')
        track = Track.objects.filter().order_by('name')
        return Response({'album': album, 'track': track})


class AlbumTemp2(APIView):
    renderer_classes = [TemplateHTMLRenderer]
    template_name = 'music_api/index_art.html'

    def get(self, request, ):
        album = Album.objects.filter().order_by('artist')
        track = Track.objects.filter()
        return Response({'album': album, 'track': track})
