from django.db import models


class Album(models.Model):
    name = models.CharField(max_length=255)
    artist = models.ForeignKey('Artist', on_delete=models.PROTECT)
    year = models.IntegerField()

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name

    def get_year(self):
        return str(self.year)


class Artist(models.Model):
    name = models.CharField(max_length=255)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name


class Track(models.Model):
    name = models.CharField(max_length=255)
    album = models.ForeignKey('Album', on_delete=models.PROTECT)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name
