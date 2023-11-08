// example 5.2

// This uses the transformation matrix tools to move,
//rotate and scale things as batch operations
let gridarr1 = [
    [0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 2, 1, 3, 3, 3, 3, 3, 3, 1, 2, 1, 1, 0, 0],
    [0, 0, 1, 2, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 2, 1, 0, 0],
    [0, 0, 1, 1, 3, 3, 1, 3, 3, 3, 3, 1, 3, 3, 1, 1, 0, 0],
    [0, 1, 1, 3, 3, 1, 3, 3, 3, 3, 1, 1, 1, 3, 1, 1, 1, 0],
    [1, 1, 1, 3, 1, 3, 3, 3, 3, 1, 1, 4, 1, 3, 1, 1, 1, 1],
    [4, 4, 1, 1, 1, 3, 3, 1, 1, 1, 4, 4, 1, 1, 3, 1, 4, 4],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 7, 7, 0, 1, 3, 1, 1, 1],
    [0, 0, 1, 3, 1, 0, 7, 7, 4, 4, 7, 7, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 3, 1, 4, 7, 0, 4, 4, 0, 7, 4, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 5, 5, 1, 2, 2, 2, 2, 2, 2, 1, 5, 5, 1, 0, 0],
    [0, 0, 1, 5, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 5, 1, 0, 0],
    [0, 1, 4, 4, 1, 2, 1, 1, 3, 3, 1, 1, 2, 1, 4, 4, 1, 0],
    [0, 0, 1, 4, 1, 2, 2, 1, 3, 3, 1, 2, 2, 1, 4, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 6, 6, 6, 1, 1, 1, 1, 6, 6, 6, 1, 0, 0, 0],

];

let gridarr2 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0],
    [0, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0],
    [0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0],
    [0, 1, 2, 2, 2, 2, 2, 3, 2, 2, 3, 2, 2, 2, 2, 1, 0, 0],
    [0, 1, 2, 2, 2, 2, 2, 4, 2, 2, 4, 2, 2, 2, 2, 2, 1, 0],
    [0, 1, 2, 2, 2, 2, 2, 5, 2, 2, 5, 2, 2, 2, 2, 2, 1, 0],
    [0, 1, 2, 2, 6, 6, 2, 2, 2, 2, 2, 2, 6, 6, 2, 2, 1, 0],
    [0, 0, 1, 2, 2, 2, 2, 2, 7, 7, 2, 2, 2, 2, 2, 2, 1, 0],
    [0, 0, 1, 2, 2, 2, 2, 2, 6, 6, 2, 2, 2, 1, 1, 1, 0, 0],
    [0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 7, 7, 7, 1, 0],
    [0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 7, 7, 7, 7, 1, 0],
    [0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 1, 7, 7, 7, 7, 1, 0],
    [0, 0, 1, 7, 7, 1, 1, 2, 2, 2, 1, 7, 7, 7, 7, 1, 0, 0],
    [0, 1, 7, 7, 7, 7, 7, 1, 1, 1, 0, 1, 7, 7, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],

];

let gridarr3 = [
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 2, 2, 8, 2, 8, 2, 2, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 2, 8, 8, 2, 8, 2, 2, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 5, 8, 2, 5, 8, 2, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 4, 3, 3, 4, 3, 8, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 3, 3, 3, 3, 3, 1, 5, 5, 0, 0, 0, 0],
    [0, 0, 0, 0, 5, 4, 1, 1, 1, 1, 4, 4, 4, 5, 0, 0, 0, 0],
    [0, 0, 0, 0, 5, 6, 4, 6, 6, 6, 2, 4, 4, 4, 5, 0, 0, 0],
    [0, 0, 0, 0, 5, 6, 4, 4, 4, 6, 6, 5, 4, 4, 4, 5, 0, 0],
    [0, 0, 0, 5, 6, 6, 5, 6, 4, 4, 4, 5, 6, 7, 4, 4, 5, 0],
    [0, 0, 5, 7, 7, 5, 5, 6, 6, 6, 6, 5, 5, 7, 7, 4, 5, 0],
    [0, 0, 5, 7, 7, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0],
    [0, 0, 0, 5, 5, 6, 5, 5, 5, 5, 5, 6, 6, 5, 0, 0, 0, 0],
    [0, 0, 0, 0, 5, 7, 7, 5, 0, 0, 5, 6, 7, 7, 5, 0, 0, 0],
    [0, 0, 0, 0, 5, 7, 5, 0, 0, 0, 0, 5, 7, 7, 5, 0, 0, 0],
    [0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0]

];

let gridarr4 = [
    [0,0,0,0,1,5,5,7,7,5,5,1,0,0,0,0,0,0],
    [0,0,0,0,6,1,5,7,7,5,1,6,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,5,5,1,1,1,1,0,0,0,0,0],
    [0,0,1,4,4,4,4,1,1,4,4,4,4,1,0,0,0,0],
    [0,1,4,4,4,4,1,1,1,4,4,4,4,4,1,0,0,0],
    [1,4,4,4,4,1,8,8,8,1,1,4,4,4,4,1,0,0],
    [0,1,4,4,1,8,8,8,8,8,8,1,1,4,4,4,1,1],
    [0,0,1,1,1,8,1,8,8,8,1,8,1,1,4,4,1,0],
    [0,0,1,4,1,8,6,8,8,8,6,8,1,4,1,1,0,0],
    [0,0,1,4,6,1,8,8,8,8,8,1,6,4,1,0,0,0],
    [0,0,1,4,4,4,1,1,1,1,1,4,4,4,1,0,0,0],
    [0,1,4,4,1,1,2,2,6,2,2,1,1,4,4,1,0,0],
    [1,4,4,4,1,2,2,2,2,2,2,2,1,4,4,4,1,0],
    [0,1,4,4,8,1,1,2,2,2,1,1,8,4,4,1,0,0],
    [0,0,1,1,8,4,1,3,3,3,1,4,8,4,1,0,0,0],
    [0,0,0,0,1,1,2,2,2,2,2,1,1,1,0,0,0,0],
    [0,0,0,0,0,1,2,2,2,2,2,1,0,0,0,0,0,0],
];

   // 18x18
   let textarr = [
    [0, 0, 0, 0, 0, "midna", "ganon", "ganon", "ganon", "ganon", "ganon", "ganon", "ganon", "midna", 0, 0, 0, 0],
    [0, 0, 0, "midna", "midna", "ganon", "zelda", "ganon", "ganon", "ganon", "ganon", "ganon", "zelda", "ganon", "midna", "midna", 0, 0],
    [0, "midna", "midna", "midna", "ganon", "zelda", "zelda", "zelda", "ganon", "ganon", "ganon", "zelda", "zelda", "zelda", "ganon", "midna", "midna", "midna"],
    [0, "midna", "ganon", "ganon", "ganon", "zelda", "ganon", "zelda", "zelda", "zelda", "zelda", "zelda", "ganon", "zelda", "ganon", "ganon", "ganon", "midna"],
    [0, "midna", "ganon", "ganon", "zelda", "zelda", "ganon", "zelda", "zelda", "link", "zelda", "zelda", "ganon", "zelda", "zelda", "ganon", "ganon", "midna"],
    [0, "midna", "ganon", "zelda", "zelda", "ganon", "zelda", "zelda", "link", "link", "link", "zelda", "zelda", "ganon", "zelda", "zelda", "ganon", "midna"],
    [0, "midna", "ganon", "zelda", "ganon", "zelda", "zelda", "link", "zelda", "zelda", "zelda", "link", "zelda", "zelda", "ganon", "zelda", "ganon", "midna"],
    [0, "midna", "ganon", "zelda", "zelda", "zelda", "link", "link", "link", "zelda", "link", "link", "link", "zelda", "zelda", "zelda", "ganon", "midna"],
    [0, "midna", "ganon", "zelda", "zelda", "zelda", "zelda", "zelda", "zelda", "impa", "zelda", "zelda", "zelda", "zelda", "zelda", "zelda", "ganon", "midna"],
    [0, "midna", "ganon", "zelda", "zelda", "impa", "impa", "zelda", "impa", "impa", "impa", "zelda", "impa", "impa", "zelda", "zelda", "ganon", "midna"],
    [0, "midna", "ganon", "ganon", "zelda", "zelda", "impa", "impa", "zelda", "impa", "zelda", "impa", "impa", "zelda", "zelda", "ganon", "ganon", "midna"],
    [0, 0, "midna", "ganon", "zelda", "impa", "zelda", "impa", "impa", "impa", "impa", "impa", "zelda", "impa", "zelda", "ganon", "midna", 0],
    [0, 0, "midna", "ganon", "zelda", "zelda", "impa", "zelda", "zelda", "impa", "zelda", "zelda", "impa", "zelda", "zelda", "ganon", "midna", 0],
    [0, 0, "midna", "midna", "ganon", "zelda", "zelda", "zelda", "impa", "impa", "impa", "zelda", "zelda", "zelda", "ganon", "midna", "midna", 0],
    [0, 0, 0, "midna", "midna", "ganon", "zelda", "impa", "zelda", "impa", "zelda", "impa", "zelda", "ganon", "midna", 0, 0, 0],
    [0, 0, 0, 0, "midna", "ganon", "zelda", "zelda", "zelda", "zelda", "zelda", "zelda", "zelda", "ganon", "midna", 0, 0, 0],
    [0, 0, 0, 0, 0, "midna", "ganon", "zelda", "ganon", "ganon", "ganon", "zelda", "ganon", "midna", 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, "midna", "ganon", "ganon", "ganon", "ganon", "ganon",  "midna", 0, 0, 0, 0, 0],
];

var a = 0;
let font1;
let font2;
let images =[];

let currentPage = 0;

function preload()  {

    font1 = loadFont('assets/old.ttf');
    font2 = loadFont('assets/oswald.ttf');
    images[0] = loadImage('assets/bricks.png');
    images[1] = loadImage('assets/cobblestone.png');
    images[2] = loadImage('assets/dirt.png');
    images[3] = loadImage('assets/glowstone.png');
    images[4] = loadImage('assets/grassblock.png');
    images[5] = loadImage('assets/ice.png');
    images[6] = loadImage('assets/netherack.png');
    images[7] = loadImage('assets/obsidian.png');
    images[8] = loadImage('assets/pinkwool.png');
    images[9] = loadImage('assets/redstone.png');
    images[10] = loadImage('assets/sand.png');
    images[11] = loadImage('assets/wood.png');
    images[12] = loadImage('assets/diamond.png');
    images[13] = loadImage('assets/endstone.png');
    images[14] = loadImage('assets/sandstone.png');

}

function setup() {
     createCanvas(800, 700);
     background(0, 159, 37);
     fill(100);
     textAlign(CENTER);
    //  textFont(font1);
     textFont(font2);

}

function draw() {
    background(0,15);

    if (currentPage == 1) {

      link(gridarr1, 250, 300, 0, .75, 255);

      push();
      translate(250,100);
      fill(255);
      textSize(30);
      textFont(font2);
      let t = "This is Link. The main character from The Legend of Zelda."
      text(t,0,0,300);  // the 4th argument is the textWidth per line.
      pop();


    } else if (currentPage == 2) {
     randomlink(gridarr1, 80, 150, -4, 0.50, 255);
     darkLink(gridarr1, 480, 20, 4, 0.75, 255);
     circLink(gridarr1, 400, 350, 0, 0.5, 255);

     imageLink(gridarr1,images, 320, 100, 0, 0.55);
     imageLink2(gridarr1,images, 100, 400, -6, 0.55);

     push();
     translate(40,50);
     fill(255);
     textSize(30);
     textFont(font2);
     let t = "Here is Link in different forms."
     text(t,0,0,300);
     pop();


    } else if (currentPage == 3) {
        link(gridarr1, 300, 300, 0, .5, 255);
        randomlink(gridarr1, 80, 150, -4, 0.50, 255);
        darkLink(gridarr1, 500, 50, 4, 0.5, 255);
        circLink(gridarr1, 600, 350, 4, 0.25, 255);

        imageLink(gridarr1,images, 320, 100, 0, 0.55);
        imageLink2(gridarr1,images, 50, 400, -6, 0.55);

        //second mapping of each
        link(gridarr1, 280, 120, 150, .75, 255);
        randomlink(gridarr1, 600, 580, 140, 0.30, 255);
        darkLink(gridarr1, 30, 600, -40, 0.25, 255);
        circLink(gridarr1, 150, 450, -10, 0.60, 255);

        imageLink(gridarr1,images, 600, 700, -80, 1);
        imageLink2(gridarr1,images, 480, 250, 6, 0.65);


        push();
        translate(400,50);
        fill(255);
        textSize(20);
        textFont(font2);
        let t = "Here is a bunch of Links.";
        // t += "\n";   // this is a command you can put in text to create a line break.
        // t += "..and them some.";
        text(t,0,0,400);
        pop();

    } else if (currentPage == 4) {
        shieldText(textarr, 150, 100, 0, 1.75, 175);

        push();
        translate(40,600);
        fill(255);
        textSize(30);
        textFont(font2);
        let t = "Link dropped his text shield..."
        text(t,0,0,300);
        pop();


       } else if (currentPage == 5) {
        shieldText(textarr, 150, 100, 0, 1.75, 175);
        wideshieldText(textarr, 450, 370, 10, 0.75, 255);

        //remapped
        shieldText(textarr, 1, 80, -10, 1, 175);
        shieldText(textarr, 530, 80, 10, 1, 175);
        wideshieldText(textarr, 1, 370, -10, 0.5, 255);

        push();
        translate(40,600);
        fill(255);
        textSize(30);
        textFont(font2);
        let t = "...all of them"
        text(t,0,0,300);
        pop();


       } else if (currentPage == 6) {
        background(255);

        link(gridarr1, 15, 400, 15, 1, 255);
        mapToColorKirby(gridarr2, 320, 80, 130, 1, 255);
        csDimitri(gridarr3, 500, 600, -90, 1, 255);
        peach(gridarr4, 400, 550, 0, 1, 255)

        push();

        translate(450,100);
        fill(0);
        textSize(30);
        textFont(font2);
        let t = "Here is Link with his friends. \nDimitri by Cassie, Kirby by Monze, \nand Peach by Trang."
        text(t,0,0,300);
        pop();


       } else if (currentPage == 7) {
        background(255);

        push();

        translate(250,250);
        fill(0);
        textSize(50);
        textFont(font2);
        let t = "Goodbye Link and friends"
        text(t,0,0,300);
        pop();


       } else {

        push();
        translate(10,100);
        fill(255);
        textSize(40);
        textFont(font2);
        text ("This is my Exercise 5. My group members were \nCassie S, Monze G, and Trang N.",0 ,0, 800 );
        translate(0,120);
        text ("I have 8 mapped images, copied at least twice \nfor a total of more than 16.",0 ,0,800 );
        translate(250,120);
        link(gridarr1, 0, 0, 0, .75, 255);
        pop();

    }




}


function keyPressed() {


    //console.log(key);
     // or
    if ( key == '1' ) {
      console.log("Page 1");
      currentPage = 1;

     } else if ( key == '2' ) {
        console.log("Page 2");
        currentPage = 2;

     } else if ( key == '3' ) {
        console.log("Page 3");
        currentPage = 3;
     } else if ( key == '4' ) {
        console.log("Page 4");
        currentPage = 4;
     } else if ( key == '5' ) {
        console.log("Page 5");
        currentPage = 5;
     } else if ( key == '6' ) {
        console.log("Page 6");
        currentPage = 6;
     } else if ( key == '7' ) {
        console.log("Page 7");
        currentPage = 7;
     } else {
        currentPage = 0;

     }

    }



// the map functions.



          //2darr, x,y,rot,scale, alpha

          function link(arr,lx,ly,rot,sc, fade) {
            push();
            translate(lx,ly);
            rotate(radians(rot));
            scale(sc);
            noStroke();
            for (var i = 0; i < arr.length; i++) { //7
                for (var j = 0; j < arr[0].length; j++) {
                    a = arr[i][j];
                    if (a === 1) {
                        fill(0, fade); //outline
                    } else if (a === 2) {
                        fill(0, 159, 37, fade); //hat, tunic
                    } else if (a === 3) {
                        fill(242, 242, 34, fade); // hair, belt
                    } else if (a === 4) {
                        fill(250, 222, 175, fade); //skin
                    } else if (a === 5) {
                        fill(103, 154, 36, fade); //sleeves
                    } else if (a === 6) {
                        fill(124, 81, 6, fade); //shoes
                    } else if (a === 7) {
                        fill(0, fade); //eyes
                    } else {
                        fill(255, fade);
                    }

                    // typical way of mapping out a grid (value * scale) + offset
                    // value  -- the increment counter from the forloop
                    // scale -- a multiple that will effect value in terms of size/position of each drawing
                    // offset -- relative movement of the x/y position on the canvas

                    rect((j * 20) + 20, (i * 20) + 20, 20, 20);
                }
            }
            pop();

        }


        function randomlink(arr,lx,ly,rot,sc, fade) {
            push();
            translate(lx,ly);
            rotate(radians(rot));
            scale(sc);
            noStroke();
            for (var i = 0; i < arr.length; i++) { //7
                for (var j = 0; j < arr[0].length; j++) {
                    a = arr[i][j];
                    if (a === 1) {
                        fill(random(255), fade); //outline
                    } else if (a === 2) {
                        fill(random(255), random(255), random(255), fade); //hat, tunic
                    } else if (a === 3) {
                        fill(random(255), random(255), random(255), fade); // hair, belt
                    } else if (a === 4) {
                        fill(random(255), random(255), random(255), fade); //skin
                    } else if (a === 5) {
                        fill(random(255), random(255), random(255), fade); //sleeves
                    } else if (a === 6) {
                        fill(random(255), random(255), random(255), fade); //shoes
                    } else if (a === 7) {
                        fill(random(255), fade); //eyes
                    } else {
                        fill(255, fade);
                    }

                    // typical way of mapping out a grid (value * scale) + offset
                    // value  -- the increment counter from the forloop
                    // scale -- a multiple that will effect value in terms of size/position of each drawing
                    // offset -- relative movement of the x/y position on the canvas

                    rect((j * 20) + 20, (i * 20) + 20, 20, 20);
                }
            }
            pop();

        }

        function darkLink(arr,lx,ly,rot,sc, fade) {
            push();
            translate(lx,ly);
            rotate(radians(rot));
            scale(sc);
            noStroke();
            for (var i = 0; i < arr.length; i++) { //7
                for (var j = 0; j < arr[0].length; j++) {
                    a = arr[i][j];
                    if (a === 1) {
                        fill(0, fade); //outline
                    } else if (a === 2) {
                        fill(74, 72, 72, fade); //hat, tunic
                    } else if (a === 3) {
                        fill(209, 209, 209, fade); // hair, belt
                    } else if (a === 4) {
                        fill(130, 127, 127, fade); //skin
                    } else if (a === 5) {
                        fill(102, 99, 99, fade); //sleeves
                    } else if (a === 6) {
                        fill(51, 49, 49, fade); //shoes
                    } else if (a === 7) {
                        fill(222, 28, 18, fade); //eyes
                    } else {
                        fill(255, fade);
                    }

                    // typical way of mapping out a grid (value * scale) + offset
                    // value  -- the increment counter from the forloop
                    // scale -- a multiple that will effect value in terms of size/position of each drawing
                    // offset -- relative movement of the x/y position on the canvas

                    rect((j * 20) + 20, (i * 20) + 20, 20, 20);
                }
            }
            pop();

        }


        function circLink(arr,lx,ly,rot,sc, fade) {
            push();
            translate(lx,ly);
            rotate(radians(rot));
            scale(sc);
            noStroke();
            for (var i = 0; i < arr.length; i++) { //7
                for (var j = 0; j < arr[0].length; j++) {
                    a = arr[i][j];
                    if (a === 1) {
                        fill(0, fade); //outline
                    } else if (a === 2) {
                        fill(0, 159, 37, fade); //hat, tunic
                    } else if (a === 3) {
                        fill(242, 242, 34, fade); // hair, belt
                    } else if (a === 4) {
                        fill(250, 222, 175, fade); //skin
                    } else if (a === 5) {
                        fill(103, 154, 36, fade); //sleeves
                    } else if (a === 6) {
                        fill(124, 81, 6, fade); //shoes
                    } else if (a === 7) {
                        fill(0, fade); //eyes
                    } else {
                        fill(255, fade);
                    }

                    // typical way of mapping out a grid (value * scale) + offset
                    // value  -- the increment counter from the forloop
                    // scale -- a multiple that will effect value in terms of size/position of each drawing
                    // offset -- relative movement of the x/y position on the canvas

                    ellipse((j * 30) + 10, (i * 30) + 20, 20, 20);
                }
            }
            pop();

        }


        function shieldText(arr,lx,ly,rot,sc,fade) {
            textSize(15);
            textAlign(CENTER);
            textFont(font1);
            push();
            translate(lx,ly);
            rotate(radians(rot));
            scale(sc);
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr[0].length; j++) {
                     let value = arr[i][j];
                      if ( value == "link" ) { //yellow
                          fill(255, 201, 25, fade);
                      } else if ( value == "zelda" ){ //blue
                          fill(42, 76, 168, fade);
                      } else if ( value == "ganon" ){ //gray
                        fill(128, 128, 128, fade);
                    } else  if ( value == "impa" ){ //red
                        fill(237, 9, 9, fade);
                    } else  if ( value == "midna" ){ //outline
                        fill(1, 1, 1, fade);
                    } else {
                          fill(0, 0, 0, 0, fade);
                      }
                       text(value, j * 10, i * 10, 100);
                }
            }
            pop();

        }


        function wideshieldText(arr,lx,ly,rot,sc,fade) {
            textSize(15);
            textAlign(CENTER);
            textFont(font1);
            push();
            translate(lx,ly);
            rotate(radians(rot));
            scale(sc);
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr[0].length; j++) {
                     let value = arr[i][j];
                      if ( value == "link" ) { //yellow
                          fill(255, 201, 25, fade);
                      } else if ( value == "zelda" ){ //blue
                          fill(42, 76, 168, fade);
                      } else if ( value == "ganon" ){ //gray
                        fill(128, 128, 128, fade);
                    } else  if ( value == "impa" ){ //red
                        fill(237, 9, 9, fade);
                    } else  if ( value == "midna" ){ //outline
                        fill(1, 1, 1, fade);
                    } else {
                          fill(0, 0, 0, 0, fade);
                      }
                       text(value, j * 25, i * 20, 20);
                }
            }
            pop();

        }

        function imageLink(arr,imgarr,lx,ly,rot,sc) {
            push();
            translate(lx,ly);
            rotate(radians(rot));
            scale(sc);
            let nuimg;
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr[0].length; j++) {
                     let value = arr[i][j];
                      if ( value == 0 ) {
                        nuimg = imgarr[0];
                      } else if ( value == 1 ){
                        nuimg = imgarr[1];
                      } else if ( value == 2 ) {
                        nuimg = imgarr[2];
                      } else if ( value == 3 ) {
                        nuimg = imgarr[3];
                      } else if ( value == 4 ) {
                        nuimg = imgarr[4];
                      } else if ( value == 5 ) {
                        nuimg = imgarr[5];
                      } else if ( value == 6 ) {
                        nuimg = imgarr[6];
                      } else if ( value == 7 ) {
                        nuimg = imgarr[7];
                      } else {
                        fill(0, 0, 0, 0, fade);
                    }
                    image(nuimg, j * 12, i * 12, 14, 14);
                }
            }
            pop();

        }


        function imageLink2(arr,imgarr,lx,ly,rot,sc) {
            push();
            translate(lx,ly);
            rotate(radians(rot));
            scale(sc);
            let nuimg;
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr[0].length; j++) {
                     let value = arr[i][j];
                      if ( value == 0 ) {
                        nuimg = imgarr[0];
                      } else if ( value == 1 ){
                        nuimg = imgarr[8];
                      } else if ( value == 2 ) {
                        nuimg = imgarr[9];
                      } else if ( value == 3 ) {
                        nuimg = imgarr[10];
                      } else if ( value == 4 ) {
                        nuimg = imgarr[11];
                      } else if ( value == 5 ) {
                        nuimg = imgarr[12];
                      } else if ( value == 6 ) {
                        nuimg = imgarr[13];
                      } else if ( value == 7 ) {
                        nuimg = imgarr[14];
                      } else {
                        fill(0, 0, 0, 0, fade);
                    }
                    image(nuimg, j * 12, i * 12, 14, 14);
                }
            }
            pop();

        }


        //group member's arrays

        function mapToColorKirby(arr,lx,ly,rot,sc, fade) {
            push();
            translate(lx,ly);
            rotate(radians(rot));
            scale(sc);
            noStroke();
            for (var i = 0; i < arr.length; i++) { //7
                for (var j = 0; j < arr[0].length; j++) {
                    a = arr[i][j];
                    if (a === 1) {
                        fill(0, fade); //outline
                    } else if (a === 2) {
                        fill(255, 163, 177, fade); //skin color
                    } else if (a === 3) {
                        fill(255, 255, 255, fade); // eye color 1
                    } else if (a === 4) {
                        fill(77, 109, 243, fade); //eye color 2
                    } else if (a === 5) {
                        fill(112, 154, 209, fade); //eye color 3
                    } else if (a === 6) {
                        fill(232, 107, 128, fade); //blush
                    } else if (a === 7) {
                        fill(230, 55, 84, fade); //top mouth
                    } else {
                        fill(255, fade); //top mouth
                    }

                    // typical way of mapping out a grid (value * scale) + offset
                    // value  -- the increment counter from the forloop
                    // scale -- a multiple that will effect value in terms of size/position of each drawing
                    // offset -- relative movement of the x/y position on the canvas

                    rect((j * 20) + 20, (i * 20) + 20, 20, 20);
                }
            }
            pop();

        }

        function csDimitri(arr,lx,ly,rot,sc, fade) {
            push();
            translate(lx,ly);
            rotate(radians(rot));
            scale(sc);
            noStroke();
            for (var i = 0; i < arr.length; i++) { //7
                for (var j = 0; j < arr[0].length; j++) {
                    a = arr[i][j];
                    if (a === 1) {
                        fill(88,60,59, fade); //headoutline
                    } else if (a === 2) {
                        fill(214,187,69, fade); // hair
                    } else if (a === 3) {
                        fill(237,214,173, fade); //skintone
                    } else if (a === 8) {
                        fill(209,175,114, fade); //skintone shade
                    } else if (a === 4) {
                        fill(41,59,135, fade); //eyes + blue
                    } else if (a === 5) {
                        fill(23,26,41, fade); //bodyoutline + eye2
                    } else if (a === 6) {
                        fill(59,63,88, fade); //clothes
                    } else if (a === 7) {
                        fill(106,123,153, fade); //shoes + gloves
                    } else {
                        fill(255, fade);
                    }

                    // typical way of mapping out a grid (value * scale) + offset
                    // value  -- the increment counter from the forloop
                    // scale -- a multiple that will effect value in terms of size/position of each drawing
                    // offset -- relative movement of the x/y position on the canvas

                    rect((j * 20) + 20, (i * 20) + 20, 20, 20);
                }
            }
            pop();

        }

        function peach(arr,lx,ly,rot,sc, fade) {
            push();
            translate(lx,ly);
            rotate(radians(rot));
            scale(sc);
            noStroke();
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr[0].length; j++) {
                     let value = arr[i][j];
                      if ( value == 0 ) {
                          fill(255, fade);
                      } else if ( value == 1 ){
                          fill(0, fade);
                      } else if ( value == 2 ) {
                          fill(255,113,181, fade);//dress light pink
                      } else if(value==3){
                         fill(225,8,127, fade); //dress dark pink

                      }else if(value==4){

                    fill(252,209,42,fade);//hair
                      }else if(value==5){

                        fill(210,181,91,fade);//crown

                      }else if(value==6){
                        fill(56,172,236,fade);// earing,blue
                      }else if(value==7){
                        fill(188,32,32,fade);// red
                      }else if(value==8){
                        fill(255,195,170,fade);// red
                      }

                        rect((j * 10) + 13, (i * 10) + 13, 10, 10);
                }
            }
            pop();

        }
