let grid = undefined;
let fill1 = prompt("enter a basic color name","purple");
let fill2 = prompt("enter another basic color", "orange");
function setup() {
    createCanvas(1000, 800);
    background("skyblue");
    grid = loadImage("images/100px_grid.png");
}

function draw() {
  if (mouseIsPressed) {
      fill(white);
  } else {
      noFill;
  }
  //stroke(180);
  //blendMode(difference);
  ellipse(mouseX, mouseY, 180, 180);
}

function draw() {
//background(grid);

//background
fill(300);
stroke(225)
ellipse(700, 1075, 1500);
fill(300);
stroke(225)
ellipse(225, 1075, 1500);

//snowman legs
fill("white")
strokeWeight(15)
stroke(250, 250, 100)

// foot
ellipse(500, 675, 400);

// body
ellipse(500, 425, 300);

// head
ellipse(500, 210, 225);

//hat brim
stroke(0);
strokeWeight(40);
line(400, 120, 600, 120);

//hat body
fill(0);
quad(400, 25, 600, 25, 575, 120, 425, 120);

//hat reflection
fill(255);
line(425, 25, 450, 80);

// eyes
stroke(0);
strokeWeight(15);
ellipse(450, 200, 40);
ellipse(550, 200, 40);

// mouth
noFill();
strokeWeight(5);
arc(465, 235, 150, 75, 0, HALF_PI);

// nose
fill(255, 0, 0);
ellipse(500, 225, 45, 30);

//left arm
stroke(0);
strokeWeight(20);
line(300, 500, 375, 375);

//right arm
stroke(0);
strokeWeight(20);
line(700, 500, 625, 375);

/*CATERPILLAR STARTS HERE*/

//caterpillar bulb 6
stroke(150, 0, 150);
strokeWeight(5);
if (mouseIsPressed) {
  fill(fill1)

} else {
   fill(fill2);
}
ellipse(275, 740, 100);
//feet6
strokeWeight(0)
fill(0);
ellipse(275, 790, 20);

//caterpillar bulb 5
if (mouseIsPressed) {
  fill(fill2)

} else {
   fill(fill1);
}
stroke(150, 0, 150);
//feet5
strokeWeight(5);
ellipse(220, 740, 100);
strokeWeight(0)
fill(0);
ellipse(220, 790, 20);

//caterpillar bulb 4
if (mouseIsPressed) {
  fill(fill1)

} else {
   fill(fill2);
}
stroke(150, 0, 150);
strokeWeight(5);
//feet4
ellipse(175, 740, 100);
strokeWeight(0)
fill(0);
ellipse(175, 790, 20);

//caterpillar bulb 3
strokeWeight(0)
fill(0);
ellipse(120, 790, 20);
if (mouseIsPressed) {
  fill(fill2)

} else {
   fill(fill1);
}
//feet3
stroke(150, 0, 150);
strokeWeight(5);
ellipse(120, 740, 100);
strokeWeight(0)
fill(0);
ellipse(130, 750, 20);

//caterpillar bulb 2
if (mouseIsPressed) {
  fill(fill1)

} else {
   fill(fill2);
}
stroke(150, 0, 150);
strokeWeight(5);
ellipse(75, 690, 100);
//feet2
strokeWeight(0)
fill(0);
ellipse(60, 700, 20);
strokeWeight(0)
fill(0);
ellipse(100, 700, 20);

//caterpillar bulb 1
if (mouseIsPressed) {
  fill(fill2)

} else {
   fill(fill1);
}
stroke(150, 0, 150);
strokeWeight(5);
ellipse(120, 625, 100);
//feet1
strokeWeight(0)
fill(0);
ellipse(145, 640, 20);
strokeWeight(0)
fill(0);
ellipse(100, 625, 20);


//caterpillar neck 0
if (mouseIsPressed) {
  fill(fill1)

} else {
   fill(fill2);
}
stroke(150, 0, 150);
strokeWeight(5);
ellipse(175, 575, 100);
//feet0
strokeWeight(0)
fill(0);
ellipse(150, 580, 20);
strokeWeight(0)
fill(0);
ellipse(200, 590, 20);

//leash
noFill();
stroke(175);
strokeWeight(10);
ellipse(300,505,30)
arc(225, 520, 150, 75, 0, HALF_PI);

//collar
fill(0)
strokeWeight(0);
ellipse(198, 520, 90);

//caterpillar head
if (mouseIsPressed) {
  fill(fill2)

} else {
   fill(fill1);
}
stroke(150, 0, 150);
strokeWeight(5)
ellipse(200, 500, 100);

//antenea
//left
stroke(150, 0, 150);
strokeWeight(5);
line(160, 410, 180, 450);
//right
line(250, 410, 225, 453);
//bulbs
strokeWeight(3);
ellipse(160, 410, 35);
ellipse(250, 410, 35);

//caterpillar eyes
stroke(0);
strokeWeight(15);
point(175, 500);
point(225, 500);

//caterpillar mouth
stroke(225, 10, 100)
ellipse(200, 520, 20)

}
