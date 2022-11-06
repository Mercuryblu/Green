 // 링크 색 바꾸기
 function LinkSetColor(color){
    var alist = document.querySelectorAll('a');
    for(var i = 0; i < alist.length; i++)
        alist[i].style.color = color;
}

// 바디 글자색 바꾸기
function BodySetColor(color){
    document.querySelector('body').style.color = color;
    
    

}

// 바디 배경색 바꾸기
function BodySetBackgroundColor(color){
    document.querySelector('body').style.backgroundColor = color;
}

// 주간, 야간모드
function day_night_handler(self) {
    var target = document.querySelector('body');
    if (self.value == 'day') {
        BodySetBackgroundColor('RGB(17,17,17)');
        BodySetColor('white');
        LinkSetColor('black')
        self.value = 'night';
    }
    else {
        BodySetBackgroundColor('white');
        BodySetColor('black');
        LinkSetColor('black')
        self.value = 'day';
    }
}