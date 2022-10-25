from django.shortcuts import render
from django.http import HttpResponse

def quiz_list(request):
    return render(request, 'users/templates/users/quiz_list.html')

def quiz1(request):
    return render(request, 'users/templates/users/quiz.html')
