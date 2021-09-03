var ball;
function setup() {

  createCanvas(800,400);
ball=createSprite(170,200,50,12)
  
}

function draw() {
  background(25,25,25); 
  if(keyIsDown(RIGHT_ARROW)) {
    ball.x += 3
  }
  drawSprites();
}
