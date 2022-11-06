import re
from django.core.paginator import Paginator
from django.shortcuts import render, get_object_or_404
from board.models import Question
from django.db.models import Q, Count


def index(request):
    """
    게시판 목록
    """
    page = request.GET.get('page','1')
    kw = request.GET.get('kw','')
    so = request.GET.get('so','recent')

    if so == 'recommend':
        question_list = Question.objects.annotate(
            num_voter=Count('voter')).order_by('-num_voter','-create_date')
    elif so == 'popular':
        question_list = Question.objects.annotate(
            num_answer=Count('answer')).order_by('-num_answer','-create_date')
    elif so == 'most':
        question_list = Question.objects.annotate(
            num_hit=Count('hit')).order_by('-hit','-create_date')
    else:
        question_list = Question.objects.order_by('-create_date')

    if kw:
        question_list = question_list.filter(
            Q(subject__icontains=kw) |
            Q(content__icontains=kw) |
            Q(author__username__icontains=kw) |
            Q(answer__author__username__icontains=kw) 
        ).distinct()

    paginator = Paginator(question_list, 10)
    page_obj = paginator.get_page(page)
    context = {'question_list' : page_obj, 
               'page' : page, 
               'kw' : kw, 
               'so' : so 
            }

    return render(request, 'board/question_list.html', context)

def detail(request, question_id):
    """
    질문상세보기
    """

    question = get_object_or_404(Question, pk=question_id)
    context = {'question' : question }
    return render(request, 'board/question_detail.html', context)