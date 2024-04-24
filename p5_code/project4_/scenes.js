
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

// example of global var that can be used between scenes


////////////////////////////// 1 /////////////////

function intro()  {

    var playButton;
    var helpButton;
    var infoButton;
    
 

    this.setup = function() {
      console.log("We are at setup for scene1");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.

     
      textAlign(CENTER);
      textSize(29);
    
      playButton = new Button({
        x: width/2,	y: height/2,
        width: 180,		height: 70,
        align_x: 0,		align_y: 0,
        content: 'Play',
        style_default: {
           color: '#fff',
           background: '#f56998',
           text_size: 36,
           text_font: loadFont('assets/heart-font.ttf'),
           border_width: 0,
           border_color: '',
           border_radius: 5
            
        },

        style_pressed: {
           color: '#fff',
           background: '#ffcea6',
           text_size: 36,
           text_font:  loadFont('assets/heart-font.ttf'),
           border_width: 0,
           border_color: '',
           border_radius: 5
        },
        on_press() {
           mgr.showScene(scene2, true);
           playclick();
        },

        style_hover: {
          background: '#f2b6cd',
          color: '#111',
        },
     });


     helpButton = new Button({
      x: width/2,	y: 500,
      width: 180,		height: 70,
      align_x: 0,		align_y: 0,
      content: 'Help',
      style_default: {
         color: '#fff',
         background: '#f56998',
         text_size: 36,
         text_font: loadFont('assets/heart-font.ttf'),
         border_width: 0,
         border_color: '',
         border_radius: 5
         
      },

      style_pressed: {
         color: '#fff',
         background: '#ffcea6',
         text_size: 36,
         text_font:  loadFont('assets/heart-font.ttf'),
         border_width: 0,
         border_color: '',
         border_radius: 5
      },
      on_press() {
         mgr.showScene(help, true);
         playclick();

      },

      style_hover: {
        background: '#f2b6cd',
        color: '#111',
      },
   });


   infoButton = new Button({
    x: 40,	y: 760,
    width: 50,		height: 50,
    align_x: 0,		align_y: 0,
    content: 'Info',
    style_default: {
       color: '#fff',
       background: '#f56998',
       text_size: 36,
       text_font: loadFont('assets/heart-font.ttf'),
       //text_font: 'serif',
       border_width: 0,
       border_color: '',
       border_radius: 5
       
    },

    style_pressed: {
       color: '#fff',
       background: '#ffcea6',
       text_size: 36,
       text_font:  loadFont('assets/heart-font.ttf'),
       border_width: 0,
       border_color: '',
       border_radius: 5
    },
    on_press() {
       mgr.showScene(info, true);
       playclick();

    },

    style_hover: {
      background: '#f2b6cd',
      color: '#111',
    },
 });



    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
        console.log("We are at entering scene1");
        // textX = 10;
        // textY = 0;

      // loy = 100;
     // background("red");

    }

    this.draw = function()
    {
       
        image(bg, 0, 0, width, height);
      

        textAlign(CENTER);
        // textSize(80);
        fill(255);

        playButton.draw();
        helpButton.draw();
        infoButton.draw();


        push();
        //
        translate(width/2,height/2);
        fill(240, 110, 160);
        textSize(90);
        text("My Dress Up", 0, -140);
        
      
        pop();


      }

      this.mousePressed = function()
      {
          if (click.isPlaying()) {
  
              click.pause(); // .play() will resume from .pause() position
  
          } else {
              click.play();
  
          }
  
  
       }
  
  } 






///////////////////////  2  ////////////////////////

function scene2()  {

  let hairdown;
  let halfup;
  let bun;
  let ponytail;
  let beanie;
  
  let currentImage;
  let currentImage2;
  let currentImage3;
  let currentImage4;


  var helpButton;
  var titleButton;
  var saveButton;
  var infoButton;
  var switchButton;
  var topswitchButton; 
  var bottomswitchButton;
  var shoesswitchButton;


  this.setup = function() {
      background(0);
      console.log("We are at setup for scene2");
    
      body = loadImage("assets/body.png");

      //hair
      hairdown = loadImage("assets/hairdown.png");
      halfup = loadImage("assets/halfup.png");
      bun = loadImage("assets/bun.png");
      ponytail = loadImage("assets/ponytail.png");
      beanie = loadImage("assets/beanie.png");
      currentImage = loadImage("assets/hairdown.png");

      //tops
      currentImage2 = loadImage("assets/blacktube.png");

      tube = loadImage("assets/blacktube.png");
      blacklong = loadImage("assets/blacklong.png");
      gorillaz = loadImage("assets/gorillaz.png");
      offshoulder = loadImage("assets/offshoulder.png");
      pinklong = loadImage("assets/pinklong.png");
      vest = loadImage("assets/vest.png");




      //bottoms
      currentImage3 = loadImage("assets/blackshorts.png");
     
      shorts = loadImage("assets/blackshorts.png");
      jeans = loadImage("assets/jeans.png");
      flares = loadImage("assets/flares.png");
      cargos = loadImage("assets/cargos.png");
      leggings = loadImage("assets/leggings.png");
      skirt = loadImage("assets/skirt.png");



      //shoes
      currentImage4 = loadImage("assets/socks.png");

      socks = loadImage("assets/socks.png");
      boots = loadImage("assets/boots.png");
      warmers = loadImage("assets/legwarmers.png");
      converse = loadImage("assets/converse.png");

      


      switchButton = new Button({
        x: 480,	y: 120,
        width: 50,		height: 50,
        align_x: 0,		align_y: 0,
        content: '>',
        style_default: {
           color: '#fff',
           background: '#f56998',
           text_size: 36,
          //  text_font: loadFont('assets/heart-font.ttf'),
           text_font: 'serif',
           border_width: 0,
           border_color: '',
           border_radius: 5
           
        },
  
        style_pressed: {
           color: '#fff',
           background: '#ffcea6',
           text_size: 36,
           text_font:  loadFont('assets/heart-font.ttf'),
           border_width: 0,
           border_color: '',
           border_radius: 5
        },
        on_press() {
           //mgr.showScene(help, true);
           playclick();
       
           if(currentImage == hairdown){
            currentImage = halfup;
          }else if(currentImage == halfup){
            currentImage = bun;
          }else if(currentImage == bun){
            currentImage = ponytail;
          }else if(currentImage == ponytail){
            currentImage = beanie;
          }else{
            currentImage = hairdown;
          };

        },
  
        style_hover: {
          background: '#f2b6cd',
          color: '#111',
        },
     });


     topswitchButton = new Button({
      x: 480,	y: 240,
      width: 50,		height: 50,
      align_x: 0,		align_y: 0,
      content: '>',
      style_default: {
         color: '#fff',
         background: '#f56998',
         text_size: 36,
        //  text_font: loadFont('assets/heart-font.ttf'),
         text_font: 'serif',
         border_width: 0,
         border_color: '',
         border_radius: 5
         
      },

      style_pressed: {
         color: '#fff',
         background: '#ffcea6',
         text_size: 36,
         text_font:  loadFont('assets/heart-font.ttf'),
         border_width: 0,
         border_color: '',
         border_radius: 5
      },
      on_press() {
         //mgr.showScene(help, true);
         playclick();
     
         if(currentImage2 == tube){
          currentImage2 = blacklong;
        }else if(currentImage2 == blacklong){
          currentImage2 = gorillaz;
        }else if(currentImage2 == gorillaz){
          currentImage2 = offshoulder;
        }else if(currentImage2 == offshoulder){
          currentImage2 = pinklong;
        }else if(currentImage2 == pinklong){
         currentImage2 = vest;
       }else {
          currentImage2 = tube;
        };

      },

      style_hover: {
        background: '#f2b6cd',
        color: '#111',
      },
   });


   bottomswitchButton = new Button({
      x: 480,	y: 400,
      width: 50,		height: 50,
      align_x: 0,		align_y: 0,
      content: '>',
      style_default: {
         color: '#fff',
         background: '#f56998',
         text_size: 36,
        //  text_font: loadFont('assets/heart-font.ttf'),
         text_font: 'serif',
         border_width: 0,
         border_color: '',
         border_radius: 5
         
      },

      style_pressed: {
         color: '#fff',
         background: '#ffcea6',
         text_size: 36,
         text_font:  loadFont('assets/heart-font.ttf'),
         border_width: 0,
         border_color: '',
         border_radius: 5
      },
      on_press() {
         //mgr.showScene(help, true);
         playclick();
     
         if(currentImage3 == shorts){
          currentImage3 = jeans;
        }else if(currentImage3 == jeans){
          currentImage3 = flares;
        }else if(currentImage3 == flares){
          currentImage3 = cargos;
        }else if(currentImage3 == cargos){
          currentImage3 = leggings;
        }else if(currentImage3 == leggings){
         currentImage3 = skirt;
       }else {
          currentImage3 = shorts;
        };

      },

      style_hover: {
        background: '#f2b6cd',
        color: '#111',
      },
   });


   shoesswitchButton = new Button({
      x: 480,	y: 680,
      width: 50,		height: 50,
      align_x: 0,		align_y: 0,
      content: '>',
      style_default: {
         color: '#fff',
         background: '#f56998',
         text_size: 36,
        //  text_font: loadFont('assets/heart-font.ttf'),
         text_font: 'serif',
         border_width: 0,
         border_color: '',
         border_radius: 5
         
      },

      style_pressed: {
         color: '#fff',
         background: '#ffcea6',
         text_size: 36,
         text_font:  loadFont('assets/heart-font.ttf'),
         border_width: 0,
         border_color: '',
         border_radius: 5
      },
      on_press() {
         //mgr.showScene(help, true);
         playclick();
     
         if(currentImage4 == socks){
          currentImage4 = boots;
        }else if(currentImage4 == boots){
          currentImage4 = warmers;
        }else if(currentImage4 == warmers){
          currentImage4 = converse;
        }else {
          currentImage4 = socks;
        };

      },

      style_hover: {
        background: '#f2b6cd',
        color: '#111',
      },
   });


      helpButton = new Button({
        x: 40,	y: 40,
        width: 50,		height: 50,
        align_x: 0,		align_y: 0,
        content: '?',
        style_default: {
           color: '#fff',
           background: '#f56998',
           text_size: 36,
          //  text_font: loadFont('assets/heart-font.ttf'),
           text_font: 'serif',
           border_width: 0,
           border_color: '',
           border_radius: 5
           
        },
  
        style_pressed: {
           color: '#fff',
           background: '#ffcea6',
           text_size: 36,
           text_font:  loadFont('assets/heart-font.ttf'),
           border_width: 0,
           border_color: '',
           border_radius: 5
        },
        on_press() {
           mgr.showScene(help, true);
           playclick();
  
        },
  
        style_hover: {
          background: '#f2b6cd',
          color: '#111',
        },
     });


     titleButton = new Button({
      x: 560,	y: 40,
      width: 50,		height: 50,
      align_x: 0,		align_y: 0,
      content: 'Home',
      style_default: {
         color: '#fff',
         background: '#f56998',
         text_size: 24,
         text_font: loadFont('assets/heart-font.ttf'),
         //text_font: 'serif',
         border_width: 0,
         border_color: '',
         border_radius: 5
         
      },

      style_pressed: {
         color: '#fff',
         background: '#ffcea6',
         text_size: 36,
         text_font:  loadFont('assets/heart-font.ttf'),
         border_width: 0,
         border_color: '',
         border_radius: 5
      },
      on_press() {
         mgr.showScene(intro, true);
         playclick();

      },

      style_hover: {
        background: '#f2b6cd',
        color: '#111',
      },
   });


   saveButton = new Button({
    x: 560,	y: 760,
    width: 50,		height: 50,
    align_x: 0,		align_y: 0,
    content: 'Save',
    style_default: {
       color: '#fff',
       background: '#f56998',
       text_size: 24,
       text_font: loadFont('assets/heart-font.ttf'),
       //text_font: 'serif',
       border_width: 0,
       border_color: '',
       border_radius: 5
       
    },

    style_pressed: {
       color: '#fff',
       background: '#ffcea6',
       text_size: 36,
       text_font:  loadFont('assets/heart-font.ttf'),
       border_width: 0,
       border_color: '',
       border_radius: 5
    },
    on_press() {
       playclick();
       saveFrames('image-0', 'png', 1, 1);

    },

    style_hover: {
      background: '#f2b6cd',
      color: '#111',
    },
 });


 infoButton = new Button({
  x: 40,	y: 760,
  width: 50,		height: 50,
  align_x: 0,		align_y: 0,
  content: 'Info',
  style_default: {
     color: '#fff',
     background: '#f56998',
     text_size: 36,
     text_font: loadFont('assets/heart-font.ttf'),
     //text_font: 'serif',
     border_width: 0,
     border_color: '',
     border_radius: 5
     
  },

  style_pressed: {
     color: '#fff',
     background: '#ffcea6',
     text_size: 36,
     text_font:  loadFont('assets/heart-font.ttf'),
     border_width: 0,
     border_color: '',
     border_radius: 5
  },
  on_press() {
     mgr.showScene(info, true);
     playclick();

  },

  style_hover: {
    background: '#f2b6cd',
    color: '#111',
  },
});

  }

  this.enter = function()
  {

      console.log("We are at  scene2 (again?)");
     
  }

    this.draw = function()
    {



      background(0);
      image(bg, 0, 0, width, height);
      
      image(body, 0, 0, width, height);

      //image(hairdown, 0, 0, width, height);
      // Draw the current hairstyle image
     image(currentImage, 0, 0, width, height);
     //shoes
     image(currentImage4, 0, 0, width, height);
      //bottoms
     image(currentImage3, 0, 0, width, height);
      //tops
     image(currentImage2, 0, 0, width, height);



      


      helpButton.draw();
      titleButton.draw();
      infoButton.draw();
      saveButton.draw();
      switchButton.draw();
      topswitchButton.draw();
      bottomswitchButton.draw();
      shoesswitchButton.draw();

      

      
      
    }


    this.mousePressed = function() {
      //console.log("exit");
      //this.sceneManager.showNextScene();
    }





}


//////////////////////info page/////////////////////////


function info()  {

  var titleButton;
  


  this.setup = function() {
    console.log("We are at setup for scene1");
    // do all stuff you want to initialize things,
    // as this it need to be called only once.

    background(255, 205, 158);
   
    textAlign(CENTER);
    textSize(29);
  

   titleButton = new Button({
    x: 560,	y: 40,
    width: 50,		height: 50,
    align_x: 0,		align_y: 0,
    content: 'Home',
    style_default: {
       color: '#fff',
       background: '#f56998',
       text_size: 24,
       text_font: loadFont('assets/heart-font.ttf'),
       //text_font: 'serif',
       border_width: 0,
       border_color: '',
       border_radius: 5
       
    },

    style_pressed: {
       color: '#fff',
       background: '#ffcea6',
       text_size: 36,
       text_font:  loadFont('assets/heart-font.ttf'),
       border_width: 0,
       border_color: '',
       border_radius: 5
    },
    on_press() {
       mgr.showScene(intro, true);
       playclick();

    },

    style_hover: {
      background: '#f2b6cd',
      color: '#111',
    },
 });

  }

  // enter() will be called each time SceneManager switches
  // to this scene
  this.enter = function()  {
      console.log("We are at entering scene1");
      // textX = 10;
      // textY = 0;

    // loy = 100;
   // background("red");

  }

  this.draw = function()
  {
     
     // image(bg, 0, 0, width, height);
     background(255, 205, 158);


      textAlign(CENTER);
      // textSize(80);
      fill(240, 110, 160);
      textSize(64);
      text("About", 100, 50);

      
      titleButton.draw();
    


      push();
      //
      translate(100,80);
      fill(240, 110, 160);
      textSize(32);
      text("For my final project, I would like to create a dress up game \nbased on myself. Get a glimpse of my closet and help me \nchoose what to wear.", 200, 100);
      text("This project can be updated continuously if \nI want to add more outfit varieties.", 200, 220);
      text("In this project, I utilized the button library to \nchange each element of my outfits as well as changing\n the scenes. I utilized the sound library by \nadding background music play throughout the game. \nAdditionally, I added clicking noises when a \nbutton is pressed.", 200, 400)
    
      pop();


    }

    this.mousePressed = function()
    {
        if (click.isPlaying()) {

            click.pause(); // .play() will resume from .pause() position

        } else {
            click.play();

        }

     }

} 



//////////////////help/////////////////

function help()  {

  
  var titleButton;


  this.setup = function() {
    console.log("We are at setup for scene1");
    // do all stuff you want to initialize things,
    // as this it need to be called only once.

   
    textAlign(CENTER);
    textSize(29);
  
    playButton = new Button({
      x: width/2,	y: height/2,
      width: 180,		height: 70,
      align_x: 0,		align_y: 0,
      content: 'Play',
      style_default: {
         color: '#fff',
         background: '#f56998',
         text_size: 36,
         text_font: loadFont('assets/heart-font.ttf'),
         border_width: 0,
         border_color: '',
         border_radius: 5
         
      },

      style_pressed: {
         color: '#fff',
         background: '#ffcea6',
         text_size: 36,
         text_font:  loadFont('assets/heart-font.ttf'),
         border_width: 0,
         border_color: '',
         border_radius: 5
      },
      on_press() {
         mgr.showScene(scene2, true);
         playclick();
      },

      style_hover: {
        background: '#f2b6cd',
        color: '#111',
      },
   });


   titleButton = new Button({
    x: 560,	y: 40,
    width: 50,		height: 50,
    align_x: 0,		align_y: 0,
    content: 'Home',
    style_default: {
       color: '#fff',
       background: '#f56998',
       text_size: 24,
       text_font: loadFont('assets/heart-font.ttf'),
       //text_font: 'serif',
       border_width: 0,
       border_color: '',
       border_radius: 5
       
    },

    style_pressed: {
       color: '#fff',
       background: '#ffcea6',
       text_size: 36,
       text_font:  loadFont('assets/heart-font.ttf'),
       border_width: 0,
       border_color: '',
       border_radius: 5
    },
    on_press() {
       mgr.showScene(intro, true);
       playclick();

    },

    style_hover: {
      background: '#f2b6cd',
      color: '#111',
    },
 });


 switchButton = new Button({
   x: 100,	y: 150,
   width: 50,		height: 50,
   align_x: 0,		align_y: 0,
   content: '>',
   style_default: {
      color: '#fff',
      background: '#f56998',
      text_size: 36,
     //  text_font: loadFont('assets/heart-font.ttf'),
      text_font: 'serif',
      border_width: 0,
      border_color: '',
      border_radius: 5
      
   },

   style_pressed: {
      color: '#fff',
      background: '#ffcea6',
      text_size: 36,
      text_font:  loadFont('assets/heart-font.ttf'),
      border_width: 0,
      border_color: '',
      border_radius: 5
   },
   on_press() {
     

   },

   style_hover: {
     background: '#f2b6cd',
     color: '#111',
   },
});


saveButton = new Button({
   x: 100,	y: 260,
   width: 50,		height: 50,
   align_x: 0,		align_y: 0,
   content: 'Save',
   style_default: {
      color: '#fff',
      background: '#f56998',
      text_size: 24,
      text_font: loadFont('assets/heart-font.ttf'),
      //text_font: 'serif',
      border_width: 0,
      border_color: '',
      border_radius: 5
      
   },

   style_pressed: {
      color: '#fff',
      background: '#ffcea6',
      text_size: 36,
      text_font:  loadFont('assets/heart-font.ttf'),
      border_width: 0,
      border_color: '',
      border_radius: 5
   },
   on_press() {
   },

   style_hover: {
     background: '#f2b6cd',
     color: '#111',
   },
});



  }

  // enter() will be called each time SceneManager switches
  // to this scene
  this.enter = function()  {
      console.log("We are at entering scene1");
     

  }

  this.draw = function()
  {
     
      //image(bg, 0, 0, width, height);

      background(255, 205, 158);

    

      textAlign(CENTER);
      // textSize(80);
      fill(255);

      
      titleButton.draw();
      saveButton.draw();


      fill(240, 110, 160);
      textSize(60);
      text("Controls", 100, 50);

      fill(240, 110, 160);
      textSize(32);
      text("This button toggles different assets \n(hair, tops, bottoms, and shoes", 380, 150);
      
      
      fill(240, 110, 160);
      textSize(32);
      text("This button allows you to save your work", 380, 260);

      
      fill(240, 110, 160);
      textSize(60);
      text("Shortcuts", 100, 350);

   
      fill(240, 110, 160);
      textSize(40);
      text("One key is Title Page", width/2, 400);
      text("Two key is Main Page", width/2, 440);
      text("Three key is Info Page", width/2, 480);
      text("Four, H, and h key is Help Page", width/2, 520);


      


      

      switchButton.draw();

   


    }

    this.mousePressed = function()
    {
        if (click.isPlaying()) {

            click.pause(); // .play() will resume from .pause() position

        } else {
            click.play();

        }

     }

} 


