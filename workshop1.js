function setup() {
  createCanvas(400, 400);
  background(220);
}

function drawRandomCircle() {
  // Generate random positions and sizes
  let x = random(width);
  let y = random(height);
  let size = random(10, 50);

  fill(random(255), random(255), random(255));

  ellipse(x, y, size, size);
}

function draw() {

  for (let i = 0; i < 10; i++) {
    drawRandomCircle();
  }
  //Use ellipseMode to change the drawing mode
  ellipseMode(CENTER);
}