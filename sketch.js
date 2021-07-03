var player;
var target;
var edges;
var snakes;
function preload(){

 playerimage=loadImage("images/bunny.png");
 snakeimage=loadImage("images/snake.png");
  bgImage=loadImage("images/b.png");
  carrotimage= loadImage("images/carrot.png");



}
function setup() {
  createCanvas(600,600);
  bg= createSprite(300,300);
  bg.addImage(bgImage);
  bg.scale = 4.5;

  snakesgroup= new Group();
  edges=createEdgeSprites();
  

  player = createSprite(40,550,30,30); 
  player.addImage(playerimage);
  player.scale=0.4;
  target = createSprite(500,40,30,30);
  target.addImage(carrotimage);
  target.scale= 0.1;
obs1 = createSprite(300,120,100,20);
obs1.velocityX = 5;
obs2 = createSprite(300,320,100,20);
obs2.velocityX = -5;
obs1 = createSprite(300,120,100,20);
obs1.velocityX = 5;
obs2 = createSprite(300,320,100,20);
obs2.velocityX = -5;
obs3 = createSprite(165,120,100,20);
obs3.velocityX = 5;
obs4 = createSprite(20,120,100,20);
obs4.velocityX = 5;
obs5 = createSprite(180,320,100,20);
obs5.velocityX = -5;
obs6 = createSprite(0.2,320,100,20);
obs6.velocityX = -5;

obs2.shapeColor = "red";
obs1.shapeColor = "red";
obs3.shapeColor = "red";
obs4.shapeColor = "red";
obs5.shapeColor = "red";
obs6.shapeColor = "red";

}

function draw() {
 genratesnake();
 for (i=0;i<(snakesgroup).length;i++){
   var temp = (snakesgroup).get(i);
     if (player.isTouching(temp)){
       player.X=40;
       player.Y=20;
  }
} 
 
obs1.bounceOff(edges[1]);
obs1.bounceOff(edges[0]);
obs2.bounceOff(edges[1]);
obs2.bounceOff(edges[0]);
obs3.bounceOff(edges[1]);
obs3.bounceOff(edges[0]);
obs4.bounceOff(edges[1]);
obs4.bounceOff(edges[0]);
obs5.bounceOff(edges[1]);
obs5.bounceOff(edges[0]);
obs6.bounceOff(edges[1]);
obs6.bounceOff(edges[0]);





var v1;
if(keyDown("up")){
  player.y=player.y-3;
}
if(keyDown("down")){
  player.y=player.y+3;
}
if(keyDown("left")){
  player.x=player.x-3;
}
if(keyDown("right")){
  player.x=player.x+3;
}
if(player.isTouching(target)){
  v1=text("YOU WIN",300,300);
  v1=textSize(40);
  v1= "red";
  
}
if(player.isTouching(obs1)){
  obs1.velocityX=0;
  text("YOU LOSE",200,200);
  
}
if(player.isTouching(obs2)){
  obs2.velocityX=0;
  text("YOU LOSE",200,200);
}
if(player.isTouching(obs3)){
  obs3.velocityX=0;
  text("YOU LOSE",200,200);
}if(player.isTouching(obs4)){
  obs4.velocityX=0;
  text("YOU LOSE",200,200);
}if(player.isTouching(obs5)){
  obs5.velocityX=0;
  text("YOU LOSE",200,200);
}
if(player.isTouching(obs6)){
  obs6.velocityX=0;
  text("YOU LOSE",200,200);
}

  drawSprites();
   
}

function genratesnake(){
  if(frameCount % 30===0){
    console.log(frameCount);
    snakes=createSprite(600,random(70,550),random(30,120),5);
    snakes.addImage(snakeimage);
    snakes.scale=random(0.1,0.3);
   snakes.velocityX=random(-4,4);
   snakes.velocityY=random(-4,4);
   snakesgroup.add(snakes);

}
}
