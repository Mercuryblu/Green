from django.forms import ModelForm
from .models import AgoraWrite


class AgoraWriteFrom(ModelForm):

    class Meta:
        model = AgoraWrite
        fields = ['title', 'contents']
        labels ={
            'title': 'title',
            'contents': 'contents'
            }

    def clean(self):
        cleaned_data = super().clean()

        title = cleaned_data.get('title', '')
        contents = cleaned_data.get('contents', '')
        
        if title == '':
            self.add_error('title', '글 제목을 입력하세요.')
        if contents == '':
            self.add_error('contents', '글 내용을 입력하세요.')
        else:
            self.title = title
            self.contents = contents
            
