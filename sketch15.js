function setup() {
  createCanvas(windowWidth, windowHeight)
  background(0)
}

function draw() {
  translate(width/2, height/2)
  translate(frameCount, 0)
  rotate(frameCount)
  rect(0, 0, 50, 50)
}
