from django.urls import path, include
from . import views

app_name = "agora"

urlpatterns = [
    path('', views.agora_view, name='agora'),
    path('/write', views.agora_write, name="write"),
]
