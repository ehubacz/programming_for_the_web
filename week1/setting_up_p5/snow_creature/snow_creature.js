let grid = undefined;
function setup() {
    createCanvas(1000, 800);
    background("#ccc");
    grid = loadImage("images/100px_grid.png");
}

function draw() {
background(grid);
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
fill
line(425, 25, 450, 80);
// eyes
stroke(0);
strokeWeight(50);
point(450, 200);
point(550, 200);
// mouth
noFill();
strokeWeight(5);
arc(465, 235, 150, 75, 0, HALF_PI);
// nose
fill(255, 0, 0);
ellipse(500, 225, 45, 30);
/*CATERPILLAR STARTS HERE*/
//caterpillar bulb2
fill(255);
stroke(150, 0, 150);
strokeWeight(5);
ellipse(75, 690, 100);
//caterpillar bulb 1
fill(255);
stroke(150, 0, 150);
strokeWeight(5);
ellipse(120, 625, 100);
//caterpillar neck
fill(255);
stroke(150, 0, 150);
strokeWeight(5);
ellipse(175, 575, 100);
//caterpillar head
fill(255);
stroke(150, 0, 150);
ellipse(200, 500, 100);
//caterpillar eyes
stroke(0);
strokeWeight(15);
point(175, 500);
point(225, 500);
//caterpillar mouth
stroke(255, 0, 0)
ellipse(200, 520, 20)
}