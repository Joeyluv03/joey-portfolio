let cx,cy;
let bgc;
let gridSize;
let heart;
let heartbreak;
let f;
let value = 0;
let bgcounter = 0;
let counter = 0;

function preload(){
  f = loadFont('assets/nightmare.otf');

}


function setup() {
    createCanvas(800, 800);
    //background(0);
    bgc = color(20,1);
    frameRate(10);
    // set up a assets folder then add an image.
    heart = loadImage("assets/heart.png")
    heartbreak = loadImage("assets/heartbreak.png")
    cx = width/2;
    cy = height/2;
    gridSize = 50;
    textSize(60);
    textFont(f);


}

function draw() {
  background(255-value);
    // checking then triggering the keyChoice for drawing
    if( mouseIsPressed && keyIsPressed ) {  // true/false
       keyChoice();
      }
      fill(255,255,0,120);
      rect(0, counter, width - random(50), 10);
      fill(255,0,255,120);
      rect(counter, 0, 10, height - random(50));

      if (counter > height) {
      background(bgcounter);
      bgcounter+=3;
      counter = 0;
      } else {
      counter+=20;

      }
  }

function keyPressed() {

          if ( key == 'b' || key == 'B' ) {
            // example of toggle logic
            if (value == 0) {
              value = 255;
            } else {
              value = 0;
            }
          }
        }


function keyChoice() {
 // the 'key' maps what characters on the keyboard you can use.
 // switch statment
switch(key) {
case 'a':
  console.log("a left");  // left
  cx+= -gridSize;
  image(heart,cx,cy,gridSize,gridSize);
  break;
case 'w':
  console.log("w up");  // up
  cy+= -gridSize;
  image(heart,cx,cy,gridSize,gridSize);
  break;
case 'd':
  console.log("d  right");  //right
  cx+= gridSize;
  image(heart,cx,cy,gridSize,gridSize);
  break;
case 's':
  console.log("s down");  // back
  cy+= gridSize;
  image(heart,cx,cy,gridSize,gridSize);
  break;
case 'b':
  console.log("b image");  // heartbreak image
  gridSize;
  image(heartbreak,cx,cy,gridSize,gridSize);
  break;
case 't':
    console.log("t text");  // text
    fill(255,0,0);
    text("RIP",cx,cy,200);
    break;
default:             // Default executes if the case labels
  console.log("None");   // don't match the switch parameter
  break;
}
key = "";  // you can empty it so it does not double trigger

}

