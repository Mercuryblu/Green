$(document).ready(function() {
    // timer변수를 만들어 약간의 딜레이를 줄건데 딜레이가 없으면 마우스가 지나갈 때마다
    // 메뉴바가 나오고 사라지고 해서 눈에 거슬림 
    var timer;
    $("#slide").mouseenter(function(){      //#slide에 mouseenter이벤트를 만듬
         timer = setTimeout(function() {       //딜레이를 설정하면서 (0.1초) 해당 시간 후에 아래와 같은 동작을 함 
            $("#panel").not(':animated')        //에니메이션이 Queue에 쌓이는 것을 방지하기 위해서  not(':animated')설정을 해준다.
            .css({color: "red"})                //css수정
            .slideDown(500)                     //display가 none에서 block으로 바뀌면서 슬라이드 효과가 생기면서 보여지게 됨
         }, 100);           
    })
    $("#menu").mouseleave(function(){       //#menu에 mouseleave이벤트를 만듬
         clearTimeout(timer);               //위에서 딜레이를 설정하고 그 시간 안에 mouseleave 이벤트가 일어나면 해당 timer변수가 사라져서
         $("#panel")                        //mouseenter이벤트 시의 동작이 일어나지 않음
         .css({color: "blue"})              //css수정
         .slideUp(500)                      //display가 none에서 block으로 바뀌면서 슬라이드 효과가 생기면서 보여지게 됨
    })
    $("#slideright1").mouseenter(function(){
        timer=setTimeout(function(){
            $("#panel1").show(1000)
        },100);
    })
    $("#texts1").mouseleave(function(){
        clearTimeout(timer);
        $("#panel1")
        .hide(1000)
    })
    $("#slideright2").mouseenter(function(){
        timer=setTimeout(function(){
            $("#panel2").show(1000)
        },100);
    })
    $("#texts2").mouseleave(function(){
        clearTimeout(timer);
        $("#panel2")
        .hide(1000)
    })
    $("#slideright3").mouseenter(function(){
        timer=setTimeout(function(){
            $("#panel3").show(1000)
        },100);
    })
    $("#texts3").mouseleave(function(){
        clearTimeout(timer);
        $("#panel3")
        .hide(1000)
    })
    $("#slideright4").mouseenter(function(){
        timer=setTimeout(function(){
            $("#panel4").show(1000)
        },100);
    })
    $("#texts4").mouseleave(function(){
        clearTimeout(timer);
        $("#panel4")
        .hide(1000)
    })
    $("#slideright5").mouseenter(function(){
        timer=setTimeout(function(){
            $("#panel5").show(1000)
        },100);
    })
    $("#texts5").mouseleave(function(){
        clearTimeout(timer);
        $("#panel5")
        .hide(1000)
    })
    $("#slideright6").mouseenter(function(){
        timer=setTimeout(function(){
            $("#panel6").show(1000)
        },100);
    })
    $("#texts6").mouseleave(function(){
        clearTimeout(timer);
        $("#panel6")
        .hide(1000)
    })
    $("#slideright7").mouseenter(function(){
        timer=setTimeout(function(){
            $("#panel7").show(1000)
        },100);
    })
    $("#texts7").mouseleave(function(){
        clearTimeout(timer);
        $("#panel7")
        .hide(1000)
    })
    $("#slideright8").mouseenter(function(){
        timer=setTimeout(function(){
            $("#panel8").show(1000)
        },100);
    })
    $("#texts8").mouseleave(function(){
        clearTimeout(timer);
        $("#panel8")
        .hide(1000)
    })
    $("#slideright9").mouseenter(function(){
        timer=setTimeout(function(){
            $("#panel").show(1000)
        },100);
    })
    $("#texts9").mouseleave(function(){
        clearTimeout(timer);
        $("#panel9")
        .hide(1000)
    })
    $("#slideright10").mouseenter(function(){
        timer=setTimeout(function(){
            $("#panel10").show(1000)
        },100);
    })
    $("#texts10").mouseleave(function(){
        clearTimeout(timer);
        $("#panel10")
        .hide(1000)
    })
    $("#slideright11").mouseenter(function(){
        timer=setTimeout(function(){
            $("#panel11").show(1000)
        },100);
    })
    $("#texts11").mouseleave(function(){
        clearTimeout(timer);
        $("#panel11")
        .hide(1000)
    });
    
});
