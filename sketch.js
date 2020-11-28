var bullet1,wall1;
var bullet2,wall2;
var bullet3,wall3;
var bullet4,wall4;
var speed1,weight1,thickness1;
var speed2,weight2,thickness2;
var speed3,weight3,thickness3;
var speed4,weight4,thickness4;

function setup() {
  createCanvas(1600,400);

  speed1 = random(223,321);
  weight1 = random(30,52);
  thickness1 = random(22,83);

  speed2 = random(223,321);
  weight2 = random(30,52);
  thickness2 = random(22,83);

  speed3 = random(223,321);
  weight3 = random(30,52);
  thickness3 = random(22,83);

  speed4 = random(223,321);
  weight4 = random(30,52);
  thickness4 = random(22,83);

  bullet1 = createSprite(100,50,30,10);
  bullet1.velocityX = speed1/10;
  bullet1.shapeColor = color(255,255,255);
  wall1 = createSprite(1500,50,thickness1,70);
  wall1.shapeColor = color(0,0,255);

  bullet2 = createSprite(100,150,30,10);
  bullet2.velocityX = speed2/10;
  bullet2.shapeColor = color(255,255,255);
  wall2 = createSprite(1500,150,thickness2,70);
  wall2.shapeColor = color(0,0,255);

  bullet3 = createSprite(100,250,30,10);
  bullet3.velocityX = speed3/10;
  bullet3.shapeColor = color(255,255,255);
  wall3 = createSprite(1500,250,thickness3,70);
  wall3.shapeColor = color(0,0,255);

  bullet4 = createSprite(100,350,30,10);
  bullet4.velocityX = speed4/10;
  bullet4.shapeColor = color(255,255,255);
  wall4 = createSprite(1500,350,thickness4,70);
  wall4.shapeColor = color(0,0,255);

  
}

function draw() {
  background(0);  

 if(hasCollided(bullet1,wall1)){
  bullet1.velocityX = 0;
var damage = (0.5 * weight1 * speed1 * speed1)/(thickness1 * thickness1 * thickness1);
if(damage > 10){
   wall1.shapeColor = color(255,0,0);

}

if(damage < 10){
   wall1.shapeColor = color(0,255,0);

}
 }

if(hasCollided(bullet2,wall2)){
  bullet2.velocityX = 0;
var damage = (0.5 * weight2 * speed2 * speed2)/(thickness2 * thickness2 * thickness2);
  if(damage > 10){
     wall2.shapeColor = color(255,0,0);
  
  }
  
  if(damage < 10){
     wall2.shapeColor = color(0,255,0);
  
  }
   }

if(hasCollided(bullet3,wall3)){
    bullet3.velocityX = 0;
    var damage = (0.5 * weight3 * speed3 * speed3)/(thickness3 * thickness3 * thickness3);
    if(damage > 10){
       wall3.shapeColor = color(255,0,0);
    
    }
    
    if(damage < 10){
       wall3.shapeColor = color(0,255,0);
    
    }
     }

     if(hasCollided(bullet4,wall4)){
      bullet4.velocityX = 0;
      var damage = (0.5 * weight4 * speed4 * speed4)/(thickness4 * thickness4 * thickness4);
      if(damage > 10){
         wall4.shapeColor = color(255,0,0);
      
      }
      
      if(damage < 10){
         wall4.shapeColor = color(0,255,0);
      
      }
       }

  drawSprites();
}