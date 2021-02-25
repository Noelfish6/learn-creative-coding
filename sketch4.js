function setup() {
  createCanvas(windowWidth, windowHeight)
  background(100)
}

var x = 10
function draw() {
  rect(x, 10, 50, 20)
  x += 50 + 10
}