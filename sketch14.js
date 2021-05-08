function setup() {
  createCanvas(windowWidth, windowHeight)
  background(0)
}

function draw() {
  background(0, 10)
  translate(mouseX, mouseY)
  rotate(frameCount/10)
  scale(map(mouseX, 0, width, -PI/2, PI))
  shearX(map(mouseY, 0, width, -PI / 2, PI))
  rect(0, 0, 200, 200)
}
