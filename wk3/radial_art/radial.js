let rotateBy = 5;

function setup() {
    createCanvas(600, 600);
    background("#D2B951");
    //fill("#FFF9FF")
    //ellipse(5, 5, 5, 5)
    angleMode(DEGREES);
}

function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 360);
    console.log(alt);
    noFill();
    stroke("#3E3E3E");
    strokeWeight(1);
    ellipse(150, 150 + alt, 150 - alt);
    bezier(alt - 10, alt + 10, 10, 10, 16, 90, 50, 80);

    //outline 2
    stroke(0);
    strokeWeight(2);
    ellipse(75, 75 + alt, 75 - alt);

    //outline 3
    ellipse(300, 300 + alt, 300 - alt);

    //outline 4
    

    //inner bezier
    fill("#5B968D")
    bezier(alt - 25, alt + 25, 25, 25, 25, 75, 150, 150);

    //white purple
    fill("#FFF9FF")
    noStroke();
    ellipse(90, 90 + alt, 30 - alt)

    //pale yellow
    fill("#FFF4C5")
    noStroke();
    ellipse(90, 90 + alt, 30 - alt)

    //small center circle, mustard
    fill("#D2B951");
    ellipse(110, 9 - alt, 12 + alt);

    //small center moving pale purple
    fill("#FCC2FF");
    ellipse(98, 9 - alt, 3 + alt);

    //growing circle
    fill("#D8FEFE");
    ellipse(90, 3 - alt, 3 + alt);

    //center blue circle
    fill("#FFF9FF");
    ellipse(30, 15 - alt, 15 + alt);

    //white purple
    ellipse(30, 3 - alt, 3 + alt);


    // bezier
    bezier(alt - 25, alt + 25, 30, 30, 25, 125, 150, 180);

    fill("#9AF9EB")
    bezier(alt - 50, alt + 50, 30, 30, 25, 125, 150, 300);

    fill("#5B968D")
    bezier(alt - 50, alt + 50, 50, 50, 50, 150, 300, 300);

    fill("#C5FFF0")
    bezier(alt - 100, alt + 100, 100, 100, 100, 200, 400, 400);

    



}

function draw() {
    translate(300, 300);
    rotate(rotateBy); // come back to this
    makeArm(rotateBy);
    rotateBy += 5;
}

function mousePressed() {
    noLoop();
}