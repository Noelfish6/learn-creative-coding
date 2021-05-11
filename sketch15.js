function setup() {
  createCanvas(windowWidth, windowHeight)
  background(0)
}

function draw() {
  translate(width/2, height/2)
  rotate(frameCount)
  translate(frameCount, 0)
  if (frameCount%5 < 3) {
    fill(255 - random(100), 45, 45)
  } else {
    fill(255 - random(200), 247, 33)
  }
  scale(1/sqrt(frameCount))
  ellipse(0, 0, 50, 50)
}
