from django.urls import path
from . import views

app_name = "user"

urlpatterns = [
    path('login', views.login_view, name="login"),
    path('logout', views.logout_view, name="logout"),
    path('signup', views.signup_view, name="signup" ),
    path('home', views.home_view, name="home" ),
    path('archive', views.archive_view, name="archive" ),
    
]