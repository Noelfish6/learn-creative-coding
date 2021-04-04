var colors = ["#E4572E", "#17BEBB", "#FFC914", "#2E282A", "E4572E"];

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(0)
}

function draw() {
  blendMode(SCREEN)
  fill(colors[int(frameCount/2)%5])
  ellipse(mouseX, mouseY, random(0,100))
}