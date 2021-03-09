function setup() {
  createCanvas(windowWidth, windowHeight)
  background(100)
}


function draw() {
  ellipse(mouseX, mouseY, 20, 20)
  var colorR = map(mouseX, 0, width, 0, 255, true)
  fill(colorR, 0, 0)
}