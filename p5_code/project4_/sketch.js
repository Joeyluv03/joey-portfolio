

// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager

let bg;


var click;
//var backgroundmusic;

var image1_up, image2_over,snd1,snd2;
// var duration;
// var  slideWidth = 500;


function preload() {

    bg = loadImage("assets/room.jpg");

    click = loadSound("assets/click.wav");
    //backgroundmusic = loadSound("assets/backgroundmusic.wav");


}


// define your p5.play sprites as global objects first.
var ghosty;


// global manager object
var mgr;


let cnv;





function setup() {
let cnv  =  createCanvas(600, 800);
  //  console.log(hell);
  angleMode(DEGREES);
  cnv.mousePressed(setupSound); // callback function
     mgr = new SceneManager();
    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (intro);
    mgr.addScene (scene2);
    // mgr.addScene (finish);
    mgr.addScene (help);
    mgr.addScene (info);
    mgr.showNextScene();

    //backgroundmusic.setVolume(0.25);
    //backgroundmusic.loop();

}

function setupSound() {
    // This is required now for most audio in browser apps.
    userStartAudio();
}


function draw()
{
    // pass the current draw function into the SceneManager
    mgr.draw();
}

function mousePressed()
{
   // pass the mousePressed message into the SceneManager
  mgr.mousePressed();
}

 function mouseMoved()
 {
   // pass the mouseMoved message into the SceneManager
   mgr.handleEvent("mouseMoved");
}

function mouseDragged()
{
   // pass the mouseMoved message into the SceneManager
    mgr.handleEvent("mouseDragged");
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( intro );
            break;
        case '2':
            mgr.showScene( scene2 );
            break;
        case '3':
            mgr.showScene( info );
            break;
        case '4':
            mgr.showScene( help );
            break; 
        case 'h':
            mgr.showScene( help );
            break;
        case 'H':
            mgr.showScene( help );
            break;  
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}



function playclick() {
    // Play the loaded audio
    if (click.isLoaded()) {
      click.play();
    }
  }


