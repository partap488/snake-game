var snake
var apple
var rottenApple
var gameState="play" //1 means play
var appleGroup,snakeGroup
var score=0
var wall1,wall2,wall3,wall4,rGroup;
function preload(){
}
function setup(){
  createCanvas(800,800)
  wall1=createSprite(400,50,720,10)
  
  wall2=createSprite(40,405,10,720)
  wall3=createSprite(400,760,720,10)
  wall4=createSprite(760,405,10,720)

snake=createSprite(200,200,20,20)
snake.shapeColor="green"
//rottenApple=createSprite(100,100,10,10)
//rottenApple.shapeColor="brown"
appleGroup=new Group()
snakeGroup=new Group()
rGroup=new Group()
apple=createSprite(random(100,600),random(100,600),20,20)
apple.shapeColor = "red"
appleGroup.add(apple)
snakeGroup.add(snake)

}
function draw(){
background("blue")

rectMode(CENTER)
  fill("lightblue")
  rect(400,405,720,700)
 
textSize(25)

text("Score: "+ score,650,30 )
if(gameState=="play"){
  if(keyIsDown(UP_ARROW)&&snake.getDirection()!==90){
    snake.velocityY = -2 
    snake.velocityX = 0; 
    snake.rotation = 0
    }
    if(keyIsDown(DOWN_ARROW)&&snake.getDirection()!==-90){

     //snake.y=snake.y+1
     snake.velocityY = 2 
     snake.velocityX = 0; 
     snake.rotation = 0
     console.log(snake.getDirection())

    }
    if(keyIsDown(LEFT_ARROW)&&snake.getDirection()!==0){
      snake.velocityY = 0 
      snake.velocityX = -2; 
      snake.rotation = -90
     }
    if(keyIsDown(RIGHT_ARROW)&&snake.getDirection()!==180){
      snake.velocityY = 0 
      snake.velocityX = 2; 
      snake.rotation = 90

    }
    if(snake.isTouching(rGroup)||
    snake.isTouching(wall1)||
    snake.isTouching(wall2)||
    snake.isTouching(wall3)||
    snake.isTouching(wall4)){
      gameState="end"
     
    }


  poison()
if(snake.isTouching(appleGroup)){
  snake.height=snake.height+20
  var a=createSprite(random(100,600),random(100,600),20,20)
  a.shapeColor = "red"
  appleGroup.add(a)
  for(var i=0;i<appleGroup.length;i++){
    appleGroup.get(i).remove()
  }  
  score += 1
}
}
else{
snake.velocityX=0
snake.velocityY=0
fill("black")
textSize(50,50)
strokeWeight(5)
stroke("red")
text("YOU ARE SO BAD",200,200)

}



drawSprites()
}
function poison(){
if(frameCount % 600===0){
  rottenApple=createSprite(random(100,600),random(100,600),20,20)
  rottenApple.shapeColor="brown" 
  rottenApple.lifetime  = 600;

  rGroup.add(rottenApple);
}
}







