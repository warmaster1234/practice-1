
function setup() {
  createCanvas(400,400);

ball=createSprite(200,200,10,10)



}

function draw() 
{
background(30);
if (keyIsDown(LEFT_ARROW)) {
  ball.x=ball.x-5
}
if (keyIsDown(RIGHT_ARROW)) {
  ball.x=ball.x5
}

drawSprites()









}




