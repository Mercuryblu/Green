from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from .models import User

# login page
def login_view(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]

        user = authenticate(username=username, password=password)
        if user is not None:
            print("인증성공")
            login(request, user)
        else:
            print("인증실패")

    return render(request, "users/login.html")


# logout page
def logout_view(request):
    logout(request)

    return redirect("users:login")


# sign-up page
def signUp_view(request):
    if request.method == "POST":
        print(request.POST)
        username = request.POST["username"]
        password = request.POST["password"]
        firstname = request.POST["firstname"]
        lastname = request.POST["lastname"]
        email = request.POST["email"]

        user = User.objects.create_user(username, email, password)
        user.last_name = lastname
        user.first_name = firstname
        user.save()
        return redirect("users:login")   

    return render(request, "users/sign_up.html")

