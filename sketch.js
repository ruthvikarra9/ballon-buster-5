var bow, arrow, green_balloon, red_balloon, pink_balloon, blue_balloon, bground;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage, blue_balloonImage, backgroundImage;
var score = 0
var arrow, arrowImage
var arrowGroup, redB, blueB, greenB, pinkB;

function preload() {

  backgroundImage = loadImage("mybackground.png");

  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");



}

function setup() {
  createCanvas(600, 600);

  //creating background
  bground = createSprite(300, 300, 600, 600);
  bground.addImage(backgroundImage);
  bground.scale = 1.5;
  bground.x = bground.width / 2;

  // creating bow to shoot arrow
  bow = createSprite(480, 220, 20, 50);
  bow.addImage(bowImage);
  bow.scale = 1;


redB = new Group();
blueB = new Group();
greenB = new Group();
pinkB = new Group();
arrowGroup = new Group();



}

function draw() {
  background("black");
  // moving ground
  bground.velocityX = -2;




  //if (arrow.isTouching(green_balloon|| red_balloon|| pink_balloon|| blue_balloon)){
  //      playerScore = playerScore + 1;

  if (bground.x < 0) {
    bground.x = bground.width / 2;
  }
  var select_balloon = Math.round(random(1, 4));
  console.log(select_balloon)

  if (World.frameCount % 80 === 0) {
    if (select_balloon === 1) {
      redBallon();
    } else if (select_balloon === 2) {
      greenBallon();
    } else if (select_balloon === 3) {
      blueBallon();
    } else if (select_balloon === 4) {
      pinkBallon();
    }
  }


  //moving bow
  bow.y = World.mouseY;
  if (keyWentDown("space")) {
  createArrow();

  }
    if (greenB.isTouching(arrowGroup)) {
    greenB.destroyEach();
    score = score + 4
    arrowGroup.destroyEach();
  } else if (redB.isTouching(arrowGroup)) {
    redB.destroyEach();
    score = score + 3
    arrowGroup.destroyEach();

  } else if (blueB.isTouching(arrowGroup)) {
    blueB.destroyEach();
    score = score + 1
    arrowGroup.destroyEach();

  } else {
    if (pinkB.isTouching(arrowGroup)) {
      pinkB.destroyEach();
      score = score + 2
      arrowGroup.destroyEach();
    }
  }

  drawSprites();
  textSize(25)
  text("score:" + score, 480, 30);

}

function createArrow() {
  arrow = createSprite(480, 100, 5, 10)
  arrow.velocityX = -6
  arrow.scale = 0.3
  arrow.addImage(arrowImage);
  arrow.y = bow.y;
  arrowGroup.add(arrow)
}

function redBallon() {
  var red = createSprite(0, Math.round(random(20, 370)), 10, 10)
  red.addImage(red_balloonImage)
  red.velocityX = 3
  red.lifetime = 150
  red.scale = 0.1
  redB.add(red);
}

function greenBallon() {
  var green = createSprite(0, Math.round(random(20, 370)), 10, 10)
  green.addImage(green_balloonImage)
  green.velocityX = 3
  green.lifetime = 150
  green.scale = 0.1
  greenB.add(green);
}

function blueBallon() {
  var blue = createSprite(0, Math.round(random(20, 370)), 10, 10)
  blue.addImage(blue_balloonImage)
  blue.velocityX = 3
  blue.lifetime = 150
  blue.scale = 0.1
  blueB.add(blue);
}

function pinkBallon() {
  var pink = createSprite(0, Math.round(random(20, 370)), 10, 10)
  pink.addImage(pink_balloonImage)
  pink.velocityX = 3
  pink.lifetime = 150
  pink.scale = 1.2
  pinkB.add(pink);
}