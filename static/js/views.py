from django.shortcuts import redirect, render
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import redirect
# from .forms import UserForm
from django.contrib.auth.models import User

# Create your views here.


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

    return render(request,"users/login.html")

def logout_view(request):
    logout(request)
    return redirect("user:login")

def signup_view(request):

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
        return redirect("user:login")   

    return render(request, "users/signup.html")

# def signup_view(request):
#     if request.method == 'POST':
#         form = UserForm(request.POST)
#         if form.is_valid():
#             form.save()
#             username = form.cleaned_data.get('username')
#             raw_password = form.cleaned_data.get('password')
#             user = authenticate(username=username, password=raw_password)
#             # login(request, user)
#             return redirect("user:login")   
#     else:
#         form = UserForm()
    
#     return render(request, "users/signup.html", {'form': form})

def home_view(request):
    
    return render(request, "users/home.html")

def archive_view(request):

    return render(request, "users/archive.html")


