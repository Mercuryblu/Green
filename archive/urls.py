from django.urls import path, include
from . import views

app_name = "archive"

urlpatterns = [
    path('', views.archive_view, name='archive'),
]
