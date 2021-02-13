var bowman, bowmanImg;
var cave, caveImg;

function preload(){
  bowmanImg = loadImage("bowman.png");
  caveImg = loadImage("cave.jpg");
}

function setup(){
  createCanvas(1200, 600)  
  cave = createSprite(displayWidth/2, displayHeight/2-100, 1200, displayHeight);
  cave.addImage(caveImg);
  cave.scale = 0.9

  bowman = createSprite(200, 500, 30,30);
  bowman.addImage(bowmanImg);
  bowman.scale = 0.13;

}

function draw(){
  if(keyDown(UP_ARROW)){
    bowman.y -= 10 
  }

  if(keyDown(DOWN_ARROW)){
    bowman.y += 10 
  }
  
  drawSprites();
}