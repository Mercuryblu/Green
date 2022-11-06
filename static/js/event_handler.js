function handleMouseDown(event){
    event.preventDefault();;
    
    const pics = document.querySelectorAll(".pic");
    const el = event.target;
    const classList = el.classList;
    
    if( !classList.contains("hold") ){
      // 곳을 클릭했을 때, 마우스 커서의 XY좌표
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      
      // 선택한 곳의 XY좌표 (왼쪽 상단 모서리 기준)
      const picPos = el.getBoundingClientRect();
      const picX = picPos.x;
      const picY = picPos.y;
      
      // 선택한 곳 안에 있는 마우스 커서의 XY좌표
      const gapX = mouseX - picX;
      const gapY = mouseY - picY;
      
      el.setAttribute("gap-x", gapX);
      el.setAttribute("gap-y", gapY);
      
      // 선택한 곳을 맨 앞으로 가지고 오기
      const maxPriority = (
        pics.length > 0 
          ? Math.max.apply(null, Array.from(pics).map(pic=>pic.getAttribute("priority"))) 
          : 9999
      ) + 1;
      el.setAttribute("priority", maxPriority);
      el.style["z-index"] = maxPriority;
      
      // 선택한 곳에 'hold' class를 추가
      classList.add("hold");
    }
  }
   
  //  움직임 이벤트 핸들러
  function handleMouseMove(event){
    
    
    const el = document.querySelector(".pic.hold");
    if( el ){

      var position = $(window).scrollTop();
    //   현재스크롤 위치


      // 움직이는 마우스 커서의 XY좌표
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      
      // 선택한 곳 안에 있는 마우스 커서의 XY좌표
      const gapX = el.getAttribute("gap-x");
      const gapY = el.getAttribute("gap-y");
      
      // 마우스 커서의 위치에 따른 위치의 XY좌표
      const picX = mouseX - gapX;
      const picY = mouseY - gapY;
      
      // 상자의 위치를 변경
      el.style.left =picX+"px";
      el.style.top = position+picY+"px";
    }
  }
   
  //  놓기 이벤트 핸들러
  function handleMouseUp(event){
    event.preventDefault();
      
    const el = document.querySelector(".pic.hold");
    if( el ){
      // 움직이면 적용된 속성 및 class를 삭제
      el.removeAttribute("gap-x")
      el.removeAttribute("gap-y")
      
      el.classList.remove("hold");
    }
  }
  