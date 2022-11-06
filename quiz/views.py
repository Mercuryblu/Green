from django.shortcuts import render


def quiz_list(request):
    return render(request, 'quiz/quiz_list.html')

def quiz_quest(request):
    return render(request, 'quiz/quiz.html')
