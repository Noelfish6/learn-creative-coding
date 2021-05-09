function setup() {
  createCanvas(windowWidth, windowHeight)
  background(0)
}

function draw() {
  translate(width/2, height/2)
  rotate(frameCount)
  translate(frameCount, 0)
  if (frameCount%5 < 3) {
    fill("red")
  } else {
    fill("white")
  }
  rect(0, 0, 50, 50)
}
