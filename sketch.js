var fixedRect,movingRect;
function setup() {



  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 70, 100);
  fixedRect.shapeColor="blue";
  movingRect=createSprite(400, 200, 100, 150);
  movingRect.shapeColor="red";
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2){
    movingRect.shapeColor="yellow"
  }else{
    movingRect.shapeColor="red"
  }
  drawSprites();
}