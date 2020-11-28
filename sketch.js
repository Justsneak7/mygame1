var hero;
var friend1,friend2;
var evil1,evil2,evil3,evil4;

function preload(){
  
}

function setup(){
createCanvas(windowWidth,windowHeight);

hero = createSprite(77,100,20,20);

friend1 = createSprite(width-100,500,20,20);
friend2 = createSprite(width-130,500,20,20);

evil1 = createSprite(width-247,447,20,20);
evil2 = createSprite(200,237,20,20);
evil3 = createSprite(900,237,20,20);
evil4 = createSprite(129,167,20,20);



}

function draw(){
  background("brown");

  //hero's movement
  if(keyDown(UP_ARROW)){
      hero.y = hero.y - 3;
  }

  if(keyDown(DOWN_ARROW)){
      hero.y = hero.y + 3;
  }

  if(keyDown(RIGHT_ARROW)){
    hero.x = hero.x + 3;
  }

  if(keyDown(LEFT_ARROW)){
    hero.x = hero.x - 3;
  }



  

  drawSprites();

}