
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  //here we are creating monkey Sprite
  monkey=createSprite(80,315,20,20);
  //here we are giving animation to the monkey 
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  //here we are creating ground sprite
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  //here we are creating foodGroup and obstracleGroup
  foodGroup=new Group();
  obstracleGroup=new Group();
  
 
}


function draw() {
background(225);
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
  //here we are calling the function food and fuction obstracles
  food();
  obstracles();
   
  //here we are giving the function of score 
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  
  //here we are giving the function of survivalTime sprite
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("SURVIVAL TIME:"+survivalTime,100,50);
  
  
  drawSprites();
}

//here we are creating the food function 
function food(){
  if(frameCount%80===0){
    var banana =createSprite(600,200,40,10);
    banana.y=Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale=0.1
    banana.velocityX=-2;
    banana.lifetime=300;
    
    foodGroup.add(banana);
  }
}
//here we are creating the obstracles function
function obstracles(){
  if(frameCount%300===0){
    var  obstrace= createSprite(400,330,40,10);
    obstrace.addImage(obstaceImage);
    obstrace.scale=0.1;
    obstrace.velocityX=-2;
    obstrace.lifetime=200;
    
    obstracleGroup.add( obstrace)
  }
}



