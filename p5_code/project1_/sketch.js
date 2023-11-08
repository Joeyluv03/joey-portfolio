
let currentkey = '1';
let bgc ;
let gkcount;

function setup() {
    createCanvas(800, 600);
    background(255);
    smooth();
    bgc = color(255);
    gkcount = 20;
    //changes color mode to hue/saturation/brightness
    colorMode(HSB);

}

function draw() {
    // triggering the clear_print function

    if( keyIsPressed) {
      clear_print();
    }
    // triggering the newkeychoice
    if(mouseIsPressed) {
     drawChoice();
    }
}

   rect(0,0,20,20); // 4 arg

  //  function rect(lx,ly,w,h) {


  //   // magial rectangle

  //  }


      // wrapper function ( no parameters or arguments )
function drawChoice() {
  // the key mapping if statemens that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of
  // graphic function
  // key global variable contains whatever key was last pressed
  let currentkey = key;

switch(currentkey) {
case '1':
  console.log("1");  // thin black line
 // let k = color(0);
  jmDrawline(color(0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '2':
  console.log("2");  // fat black line
  jmDrawFatline(color(0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '3':
  console.log("3");  // thin pink line
  jmDrawline(color(349,21,100), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '4':
  console.log("4");  // fat pink line
  jmDrawFatline(color(349,21,100), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '5':
  console.log("5");  // thin cherry blossom pink line
  jmDrawline(color(350,30,96), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '6':
  console.log("6");  // fat cherry blossom pink line
  jmDrawFatline(color(350,30,96), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '7':
  console.log("7");  // thin mountbatten pink line
  jmDrawline(color(343,18,62), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '8':
  console.log("8");  // fat mountbatten pink line
  jmDrawFatline(color(343,18,62), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '9':
  console.log("9");  // thin purple line
  jmDrawline(color(293,32,56), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '0':
  console.log("0");  // fat purple line
  jmDrawFatline(color(293,32,56), mouseX, mouseY, pmouseX, pmouseY);
  break;
case 'w':
  console.log("w");  // thin white line
  jmDrawline(color(0,0,100), mouseX, mouseY, pmouseX, pmouseY);
  break;
case 'e': // thick erase
  console.log("e");  // erase with bg color
  eraser(bgc,mouseX, mouseY,25);
   break;
case 'r': //circle brush
  console.log("r");
  jmCircleBrush(gkcount, mouseX, mouseY, pmouseX, pmouseY)
  break;
  case 'd': //circle brush
  console.log("d");
  jmRandomRectBrush(gkcount, mouseX, mouseY, pmouseX, pmouseY)
  break;

default:             // Default executes if the case labels
  console.log("None");   // don't match the switch parameter
  break;
}

}

function jmDrawline( k,  lx, ly,  px, py) {

  strokeWeight(1);
  stroke(k);
  line(lx, ly, px, py);
  console.log(mouseX);
  console.log(pmouseX);
}

function jmDrawFatline( k,  lx, ly,  px, py) {
  strokeWeight(20);
  stroke(k);
  line(lx, ly, px, py);
}


function jmCircleBrush(k, lx, ly,  px, py) {
  strokeWeight(1);
  stroke(k);
  fill(0,0,100);
  //line(lx, ly, px, py)
  ellipse(lx, ly, random(20,50));
  console.log(mouseX);
  console.log(mouseY);

}

function jmRandomRectBrush(k, lx, ly,  px, py) {
  strokeWeight(1);
  stroke(k);
  fill(random(),random(),random());
  //line(lx, ly, px, py)
  rect(lx, ly, random(20,50));
  console.log(mouseX);
  console.log(mouseY);

}

function eraser( k, lx, ly, sz) {
  fill(k);
  stroke(k);
  ellipse(lx, ly, sz,sz);
}

function clear_print() {

  // these 2 options let you choose between clearing the background
  // and saveing the current image as a file.
  if (key == 'c' || key == 'C') {
    background(255);
  } else if (key == 'p' || key == 'P') {
    saveFrames('image-0', 'png', 1, 1);
    key = '';  // resets the key so it does not make more than one image.
  }

}

// mouseX ==> 100
// mpuseX --> 110  --<pmouseX 100

// mouseX > 100
// mouseX > 110
// pmouseX> 100
// mouseX > 120
// pmouseX> 110
// mouseX > 130
