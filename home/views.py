from django.shortcuts import redirect, render
from django.contrib.auth.models import User


# 홈 화면 호출
def home_view(request):
    return render(request, "home/home.html")