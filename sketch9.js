function setup() {
  createCanvas(windowWidth, windowHeight)
  background(100)
}

function draw() {
  colorMode(HSB)
  fill(mouseX % 360, 100, 100)
  ellipse(mouseX, mouseY, 50, 50)
  noStroke()
}