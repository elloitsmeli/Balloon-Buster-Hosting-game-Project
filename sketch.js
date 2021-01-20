var background;
var background_img;

var balloon1;
var balloon1_img;

var balloon2;
var balloon2_img;

var balloon3;
var balloon3_img;

var balloon4;
var balloon4_img;

var bow;
var bow_img;

var arrow;
var arrow_img;

var score=0;

var redGroup,greenGroup,pinkGroup,blueGroup;

var arrowGroup;

function preload(){
 //load your images here 
 background_img=loadImage("background20.png");
 balloon1_img=loadImage("blue_balloon0.png");
 balloon2_img=loadImage("green_balloon0.png");
 balloon3_img=loadImage("pink_balloon0.png");
 balloon4_img=loadImage("red_balloon0.png");
  bow_img=loadImage("bow0.png");
  arrow_img=loadImage("arrow0.png");
  }


function setup() {
  createCanvas(600, 600);
 background=createSprite(0,0,600,600);
  background.addImage("background",background_img);
  background.x=50
  background.scale=50
  
   bow=createSprite(450,200,50,50);
  bow.addImage("bow",bow_img);
  
 redGroup = new Group();
 greenGroup = new Group();  
 blueGroup = new Group();
 pinkGroup= new Group();
  arrowGroup = new Group();
  }
  

  
function draw() {
bow.y=mouseY;

background.velocityX=-2
if(background.x<0){background.x=200
  }
  
  if(keyDown("space"))
  {
   //arrow.velocityX=-4 
    arrowFunc()
  }
  
 if(arrowGroup.isTouching(redGroup)){
   console.log("red");
      redGroup.destroyEach();
      arrowGroup.destroyEach();
      score=score+2
    }
    if(arrowGroup.isTouching(pinkGroup)){
      pinkGroup.destroyEach();
      arrowGroup.destroyEach();
      score=score+1
    }    
    if(arrowGroup.isTouching(blueGroup)){
      blueGroup.destroyEach();
      arrowGroup.destroyEach();
      score=score+3
    }
    if(arrowGroup.isTouching(greenGroup)){
      greenGroup.destroyEach();
      arrowGroup.destroyEach();
      score=score+2
    }     
  
  randomBalloons();
  drawSprites();
  text(score,140,20);
  text("score:",100,20);
}



function reset()
{
  arrow.x=-30;
  arrow.y=175;
  arrow.velocityX=0;
  arrow.velocityY=0;  
}

function arrowFunc()
{arrow=createSprite(340,175,10,10) ;
  arrow.addImage("arrow0.png",arrow_img);
   arrow.scale=0.3;
 arrow.velocityX=-4;
 arrowGroup.add(arrow);
 arrow.y=bow.y; }

function randomBalloons()
{var select_balloon = Math.round(random(1,4));
 // console.log(select_balloon)
     
       if (World.frameCount % 80 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      green_Balloon();
    } else if (select_balloon == 3) {
      blue_Balloon();
    } else {
      pinkBalloon();
    }
  }}

function redBalloon(){
     var red =createSprite(0,Math.round(random(20,370)), 10, 10);
          red.addImage(balloon4_img);
          red.velocityX = 3;
          red.scale = 0.1
red.lifetime = 150;
  redGroup.add(red);
  }
  
  function green_Balloon(){
   var green =createSprite(0,Math.round(random(20,370)), 10, 10);
           green.addImage(balloon2_img);
           green.velocityX = 3;
           green.scale = 0.1
    green.lifetime = 150;
    greenGroup.add(green);
  }
     function blue_Balloon(){
    var blue =createSprite(0,Math.round(random(20,370)), 10, 10);
           blue.addImage(balloon1_img);
           blue.velocityX = 3;
           blue.scale = 0.1
       blue.lifetime = 150;
       blueGroup.add(blue);
  }
     function  pinkBalloon(){
   var pink =createSprite(0,Math.round(random(20,370)), 10, 10);
           pink.addImage(balloon3_img);
           pink.velocityX = 3;
       pink.scale = 1
       pink.lifetime = 150;
       pinkGroup.add(pink);
  }