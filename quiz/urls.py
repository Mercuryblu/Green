from django.urls import path
from django.views import View
from django.urls import path

from . import views

app_name = "quiz"
urlpatterns = [
    path('start', views.quiz_list,name='start'),
    path('1/' ,views.quiz1,name='1/'),

]
