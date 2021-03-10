const { randomBytes } = require("crypto")

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(100)
  x = width / 2
  y = height / 2
  delta = 10
}

var x, y, delta
function draw() {
  delta = mouseX / 50
  x += random(-delta, delta)
  y += random(-delta, delta)
  var colorR = map(mouseX, 0, width-10, 0, 255, true)
  fill(colorR, 0, 0)
  ellipse(x, y, 100, 100)
}