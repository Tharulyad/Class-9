var ball 

function setup() {
  createCanvas(400,400);
  ball=createSprite(200,200,10,10)
  
}

function draw() 

{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
    ball.position.x=ball.position.x +6
  }
  if(keyIsDown(LEFT_ARROW)){
    ball.position.x=ball.position.x -6
  }
  drawSprites()

}




