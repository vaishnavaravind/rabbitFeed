var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var leaf,leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png");
  leafImg=loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);




}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX;
  
redapple();
greenleaf();
  drawSprites();
}

function redapple()
{
  if(frameCount % 120===0)
  {
    apple=createSprite(120,120,15,15);
    apple.scale=0.09;
    apple.addImage(appleImg);
    apple.setVelocity(0,2);
    apple.x=Math.round(random(50,350))
apple.lifeTime=134;
  }
}
function greenleaf(){
  if(frameCount % 120===0){
    leaf=createSprite(300,105,15,15);
leaf.scale=0.09;
leaf.addImage(leafImg);
leaf.setVelocity(0,2);
leaf.x=Math.round(random(10,380))
leaf.lifeTime=134;

  }
}
