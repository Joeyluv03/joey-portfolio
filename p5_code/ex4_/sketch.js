let b;

let ghostArr = []; // Declare an array of 15 ghost objects
let numghost = 15;

function setup() {
  createCanvas(600, 600);
  background(0);
  b = loadImage("assets/pacman_bg.png");

  rectMode(CENTER);
  angleMode(DEGREES);


  // Initialize the array with character objects
  for (let i = 0; i < numghost; i++) {
    ghostArr[i] = new jmGhost(color(255,0,0), random(width), height / 2, random(360), random(0.25, 0.75));
  }


}



function draw() {
  background(0);
  image(b, 0, 0, 600, 600);

  fill(255, 0, 0);


 for (let i = 0; i < ghostArr.length; i++) {
    ghostArr[i].update(); // Update ghost position if necessary
    ghostArr[i].displayGhost(); // Display the ghost
  }

 
  
}

function mousePressed() {

    for (let i = 0; i < ghostArr.length; i++) {
        ghostArr[i].newDirection();
        ghostArr[i].newRotation();
        ghostArr[i].newSize();
    }

  
}


class jmGhost {

    //class variables
    k;
    lx;
    ly;
    rot;
    sc;
    c;
    xspeed; 
    yspeed;

    constructor(tk, tlx, tly, trot, tsc) {

        this.k = tk;
        this.lx = tlx;
        this.ly = tly;
        this.rot = trot;
        this.sc = tsc;
        this.xspeed = random(-1,1);
        this.yspeed = random(-1,1);
    
    }

     displayGhost() {
        //let k = color(255,0,0) //red ghost
        push();
        translate(this.lx, this.ly);
        rotate(this.rot);
        scale(this.sc);
        this.ghostBody(this.k);
        this.eye(73, 45); 
        this.eye(50, 45); 
        pop();
    
    }

     ghostBody(lk,llx,lly){
        fill(lk);
        translate(llx,lly)
        noStroke();
        ellipse(56, 49, 54, 50);
        triangle(29, 89, 29, 52, 50, 60);
        triangle(49, 89, 29, 52, 60, 60);
        triangle(65, 89, 40, 52, 76, 60);
        triangle(83, 89, 52, 52, 83, 50);
    
    }
    
     eye(llx, lly){
      fill(255);
      noStroke();
      ellipse(llx, lly, 18, 18);
      this.pupil(llx + 2, lly);
    }

     pupil(llx, lly) {
        fill(0);
        noStroke();
        ellipse(llx, lly, 15, 15);
      }

  update() {

    this.lx += this.xspeed;
    this.ly += this.yspeed;
    this.lx += random(-1,1);
    this.ly += random(-1,1);

    if (this.lx > width) {
      this.lx = 0;
    }

    if (this.lx < 0) {
      this.lx = width;
    }

    if (this.ly > height) {
      this.ly = 0;
    }

    if (this.ly < 0) {
      this.ly = height;
    }
  }

   newDirection() {
    this.xspeed = random(-3,3);
    this.yspeed = random(-3,3);
    //this.c = random(255,255,255);
     
  }
  newRotation() {
    this.rot = random(-180,180);
  }

  newSize() {
    this.sc = random(0.5,3);
  }


}


