function setup() {
  createCanvas(windowWidth, windowHeight)
  background(0)
}

function draw() {
  background(0, 10)
  translate(width/2, height/2)
  rotate(map(mouseX, 0, width, -PI/2, PI))
  rect(0, 0, 200, 200)
}
