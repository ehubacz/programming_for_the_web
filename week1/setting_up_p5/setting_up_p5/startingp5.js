function setup() {
    // code to create a canvas and canvas pixel size
    createCanvas(400, 400);
  }
  
  // code to create function and look, # is color code 0=black 255=max of white
  function draw() {
    background(220);
    if (mouseIsPressed) {
      fill(0);
    } else {
      fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
  }