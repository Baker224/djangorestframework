from rest_framework import serializers
from .models import *


class AlbumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Album
        fields = ('name', 'artist', 'year')


class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = ('name',)


class TrackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Track
        fields = ('name', 'album')
