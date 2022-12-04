from django.shortcuts import render, redirect
from .forms import AgoraWriteFrom
from .models import AgoraWrite
from users.models import User


# main
def agora_view(request):
    agora_list = AgoraWrite.objects.all()
    return render(request, "agora/agora.html", {'agora_list':agora_list})

def view_agora_post(request, pk):
    post = AgoraWrite.objects.get(pk=pk)
    return render(request, 'agora/agora_post.html', {'post':post})


# 글작성
def agora_write(request):
    login_session = request.session.get('login_session','')
    context = { 'login_session' : login_session}

    if request.method == 'GET':
        write_form = AgoraWriteFrom()
        context['forms'] = write_form
        return render(request, "agora/agora_write.html", context)

    if request.method == "POST":
        write_form = AgoraWriteFrom(request.POST)

        if write_form.is_valid():
            writer = User.objects.get(user_id=login_session)
            agoraWriter = AgoraWrite(
                title = write_form.title,
                contents = write_form.contents,
                writer = writer
            )
            agoraWriter.save()
            return redirect('agora/') #redirect("agora:agora")
        else:
            context['forms'] = write_form
            if write_form.errors:
                for value in write_form.errors.values():
                    context['error'] = value
        return render(request, "agora/agora_write.html", context)
    
    return render(request, "agora/agora_write.html", context)

