from django.shortcuts import render


# main
def agora_view(request):
    return render(request, "agora/agora.html")


# 글작성
def agora_write(request):
    # if request.method == "POST":
        
    
    return render(request, "agora/agora_write.html")