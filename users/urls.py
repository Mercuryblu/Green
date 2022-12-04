from django.urls import path
from . import views

app_name = "users"

urlpatterns = [
    path('', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('sign-up/', views.signUp_view, name='sign-up'),
]
