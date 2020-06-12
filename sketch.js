var bullet,thickness;
var speed,weight;
var d;

function setup() {
  createCanvas(1600,400);
  bullet= createSprite(10, 200, 50, 10);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

 wall=createSprite(1200,200,thickness,height/2);

  bullet.velocityX=speed;

}

function draw() {
  background(0);  
  drawSprites();
  
  bullet.shapeColor="white";
  wall.shapeColor=(80,80,80);
  
  
 
 
  
  //collision
  if(bullet.x-wall.x<bullet.width/2+wall.width/2 &&
    wall.x-bullet.x<bullet.width/2+wall.width/2 &&
     bullet.y-wall.y<bullet.height/2+wall.height/2 &&
     wall.y-bullet.y<bullet.height/2+wall.height/2 
     )
  {
    bullet.velocityX=0;
    damage();
   
  }

}

function damage()
{
  
  //deformation
 d=(0.5*weight*speed*speed)/(thickness*thickness*thickness);

  
  if(d>10)
  {
    bullet.shapeColor="red";
  }
  else if(d<10)
  {
    bullet.shapeColor="green";
  }
}