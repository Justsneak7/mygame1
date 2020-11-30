var hero;
var friend1,friend2;
var evil1,evil2,evil3,evil4;

var wall1, wall1, wall3


function preload(){
  
}

function setup(){
createCanvas(windowWidth,windowHeight);

hero = createSprite(77,100,20,20);

friend1 = createSprite(width-100,500,20,20);
friend2 = createSprite(width-130,500,20,20);

///evil1 = createSprite(width-247,447,20,20);
//evil2 = createSprite(200,237,20,20);
//evil3 = createSprite(900,237,20,20);
//evil4 = createSprite(129,167,20,20);

wall1 = createSprite(510,320,357,10);
wall2 = createSprite(533,360,300,10);
wall3 = createSprite(336,281,10,87);
wall4 = createSprite(363,240,290,10);
wall5 = createSprite(427,180,10,30);
wall6 = createSprite(503,220,10,30);
wall7 = createSprite(556,210,10,100);
wall8 = createSprite(666,258,230,10);
wall9 = createSprite(666,210,10,100);




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