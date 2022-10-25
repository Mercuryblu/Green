const pics = document.querySelectorAll(".pic");
 
pics.forEach(function(pic, idx){      
  // 상자의 우선순위 설정
  let priority = pic.getAttribute("priority");
  if( !priority ){
    priority = idx+1;
    pic.setAttribute("priority", priority);
  }
  pic.style["z-index"] = priority;
  
  //  선택 이벤트 바인딩
  pic.addEventListener('mousedown', handleMouseDown);
});
 
// 마우스 이벤트 바인딩
document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('mouseup', handleMouseUp);