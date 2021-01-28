var background1,backgroundImg;
var fairy,fairyImg;
var star,starImg;
var music;


function preload()
{
   //preload the images here
   backgroundImg=loadImage("images/starnight.png");
   fairyImg=loadImage("images/fairy1.png");
   starImg=loadImage("images/star.png");
   music=loadSound("sound/JoyMusic.mp3");
}

function setup() {
  createCanvas(800,750);

  background1= createSprite(400,375,800,750);
  background1.addImage(backgroundImg);

  fairy=createSprite(200,500,10,10)
  fairy.addImage(fairyImg);
  fairy.scale=0.3;

  star=createSprite(630,100,10,10)
  star.addImage(starImg);
  star.scale=0.15;

}


function draw() {
  background("black");
 
  if(keyDown("left")){
    fairy.x=fairy.x-5;
  }
  if(keyDown("right")){
    fairy.x=fairy.x+5;
    music.play();
      }
      if(keyDown("down")){
       star.velocityY=3;
      }
      if(star.y>485){
         star.velocityY=0;
         //isStatic :true,
         music.stop();
      }

      drawSprites(); 
    

}