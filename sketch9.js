function setup() {
  createCanvas(windowWidth, windowHeight)
  background(100)
}

function draw() {
  var clr = color(100)
  fill(clr)
  ellipse(mouseX, mouseY, 20, 20)
}