function setup() {
    createCanvas(200, 200);
}

function createTile() {
    //background
    translate(0, 0);
    fill("#6A003B");
    rect(0, 0, 200, 200);

    noStroke();

    fill("#950053");
    ellipse(50, 50, 80, 80);
    ellipse(150, 150, 80, 80);
    ellipse(50, 150, 80, 80);
    ellipse(150, 50, 80, 80);

    fill("#B20164");
    ellipse(60, 60, 80, 80);
    ellipse(140, 140, 80, 80);
    ellipse(60, 140, 80, 80);
    ellipse(140, 60, 80, 80);

    fill("#E0037F");
    ellipse(70, 70, 80, 80);
    ellipse(130, 130, 80, 80);
    ellipse(70, 130, 80, 80);
    ellipse(130, 70, 80, 80);

    fill("#FF2EA3");
    ellipse(80, 80, 80, 80);
    ellipse(120, 120, 80, 80);
    ellipse(80, 120, 80, 80);
    ellipse(120, 80, 80, 80);

    fill("#FF6EBF");
    ellipse(90, 90, 80, 80);
    ellipse(110, 110, 80, 80);
    ellipse(90, 110, 80, 80);
    ellipse(110, 90, 80, 80);

    fill("#FFBCE1");
    ellipse(100, 100, 80, 80);

    



    
}

function draw() {
    createTile();
}