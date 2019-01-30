from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator
from django.utils.timezone import now
from datetime import datetime
from django.contrib.humanize.templatetags.humanize import naturaltime