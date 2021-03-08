var fixedRect, movingRect;
function preload() {

}

function setup() {
  createCanvas(1200, 700);
  fixedRect = createSprite(550, 400, 50, 80);
  fixedRect.shapeColor = "red"
  movingRect = createSprite(100, 400, 80, 50);
  movingRect.shapeColor = "red"
}

function draw() {
  background(0);
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  if (isTouching(fixedRect,movingRect)) {
    console.log("touching")
    fixedRect.shapeColor = "green"
    movingRect.shapeColor = "green"
  }
  else {
    console.log("Not touching")
    fixedRect.shapeColor = "red"
    movingRect.shapeColor = "red"
  }
  drawSprites();
}

function isTouching(o1, o2) {
  if (o1.x - o2.x < o2.width / 2 + o1.width / 2 &&
    o2.x - o1.x < o2.width / 2 + o1.width / 2 &&
    o1.y - o2.y < o2.height / 2 + o1.height / 2 &&
    o2.y - o1.y < o2.height / 2 + o1.height / 2) {
    return true
  }
  else{
    return false
  }

}
