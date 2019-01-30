from django.db import models
from django.template.defaultfilters import slugify
# Create your models here.

class Forum(models.Model):
  # Model to represent forum
  name = models.CharField(max_length = 30, unique = True)
  description = models.CharField(max_length = 200)
  slug = models.SlugField(unique = True)

  def __str__(self):
    return self.slug

  def save(self, *args, **kwargs):
    if not self.id:
      self.slug = slugify(self.name)
    super(Forum, self).save(*args, **kwargs)