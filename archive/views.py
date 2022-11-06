from django.shortcuts import render

# Create your views here.

def archive_view(request):
    return render(request, "archive/archive.html")