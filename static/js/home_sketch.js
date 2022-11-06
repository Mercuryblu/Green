/*
@ aute : soojin seng
@ reference: wedie
*/

let table;
let numRows;
let numCols;
let diagramX;
let diagramY;

let date = [];
let gsml = [];


function preload() {
  table = loadTable("/static/csv/home_data.csv", "csv", "header");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  numRows = table.getRowCount();
  numCols = table.getColumnCount();

  //load data
  for (let r = 0; r < table.getRowCount(); r++) {
    date[r] = table.getString(r, 0);
    gsml[r] = table.getNum(r, 1);
  }
  minMax();
}


let size = [];
function draw() {
  background(0);
  chartInfo();

  diagramX = (width / 4) * 2 - 450;
  diagramY = (height / 4)* 3 - 150;
  let radius = width / 5 - 230;
  let ang = 360 / numRows;

  //max value79.5min value-3.5
  for (let i = 0; i < numRows; i++) {
    size[i] = map(gsml[i] ,-3.5, 13, 0, 700);

    let pointx = (size[i] + radius) * cos(radians(ang * i)) + diagramX;
    let pointy = (size[i] + radius) * sin(radians(ang * i)) + diagramY;
    let cirx = radius*cos(radians(ang*i)) +diagramX;
    let ciry = radius*sin(radians(ang*i)) +diagramY;

    if(i % 12 ===0) {
      strokeWeight(1.3);
      stroke('white')}
      
    else {
      //draw the line
      stroke('white')
      strokeWeight(0.2);}
      
      line(cirx, ciry, pointx, pointy)
      
      let datasize;
      let dis=dist(mouseX,mouseY,pointx,pointy);

      if (dis<5) {

        fill('red')
        datasize = 10;
        noStroke();
        circle(pointx,pointy,datasize);
        textAlign(CENTER)
        textSize(18);
        fill('white')
        text(date[i],diagramX, diagramY-5)
        fill('white')
        rect(diagramX,diagramY+5,30,5)
        textSize(25);
        text(gsml[i],diagramX,diagramY+40)
        
    } else {
      fill('red')
      datasize = 3;
      noStroke();
      circle(pointx,pointy,datasize);
    }
    
    //draw the data points
    fill('white');
    noStroke();
    circle(pointx, pointy,4.5);
  }
}


function chartInfo() {
  textAlign(LEFT);
  fill(255);
  textSize(27);
  text("대기전력", width/4+930, height/4+10, width/3.5);
  textSize(16);
  text("대기전력은 기기가 외부 전원과 연결된 상태에서 주기능을 수행하지 않거나 켜진 신호를 기다리는 상태에서 소비되는 전력입니다. 우리나라에서 사용되는 전자기기(3억 대)의 평균 대기전력은 3.6W로 약 3억 대가 아무 일도 하지 않고 총 100만㎾ 전력을 소비합니다. 국제에너지기구는 경제협력개발기구(OECD) 회원국들의 경우 가구당 전력소비량의 10%인 60W(W)가 대기전력일 것으로 추정합니다. 왼쪽의 그래프는 기기별 대기전력을 보여준 것으로 커서를 가져가 기기의 대기전력을 확인해 볼 수 있습니다.",
       width/4+930, height/4+55, width/3.5);
}


let dataMin, dataMax = 0;

function minMax() {
  for (let i = 0; i < numRows; i++) {
    if (table.getNum(i, 1) > dataMax) {
      dataMax = table.getNum(i, 1);
    }
  }
  dataMin = dataMax;
  for (let i = 0; i < numRows; i++) {
    if (table.getNum(i, 1) < dataMin) {
      dataMin = table.getNum(i, 1);
    }
  }
  print("max value" + dataMax + "min value" + dataMin);
}