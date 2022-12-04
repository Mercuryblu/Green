from django.db import models

class AgoraWrite(models.Model):
    title = models.CharField(max_length=64, verbose_name='title')
    contents = models.TextField(verbose_name='contents')
    writer = models.ForeignKey('users.User', on_delete=models.CASCADE, verbose_name='writer')
    writerDt = models.DateTimeField(auto_now_add=True, verbose_name='writerDt')
    updateDt = models.DateTimeField(auto_now=True, verbose_name='updateDt')
    hits = models.PositiveIntegerField(default=0, verbose_name='hits')
    likes = models.PositiveIntegerField(default=0, verbose_name='likes')

    def __str__(self):
        return self.title
    
    
