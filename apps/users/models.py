from __future__ import unicode_literals

from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    age = models.IntegerField()

    def __unicode__(self):
        return self.name
