//1. Create a variable named "box"
var box;
function setup() {
  createCanvas(400, 400);
  
  //2.Assign "box" to the "createSprite()"
  box=createSprite(40,40,15,15);
  //4.Set sprite color to "white"
  box.shapeColor="white";
  //5.set velocity of sprite for horizontal movement
  box.velocityX=0.5;
}
function draw() {
  background("orange");
  drawSprites();
  //3. Display sprite using "drawSprites()"
 
}




  