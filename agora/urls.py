from django.urls import path, include
from . import views

app_name = "agora"

urlpatterns = [
    path('', views.agora_view, name='agora'),
    path('<int:pk>/', views.view_agora_post, name='agora_post'),
    path('write/', views.agora_write, name="write"),
]
