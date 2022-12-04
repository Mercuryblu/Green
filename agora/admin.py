from django.contrib import admin
from .models import AgoraWrite

@admin.register(AgoraWrite)
class AgoraAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'contents',
        'writer',
        'writerDt',
        'updateDt',
        'hits',
        'likes'
    )
    