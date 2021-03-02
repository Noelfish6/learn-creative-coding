function setup() {
  createCanvas(windowWidth, windowHeight)
  background(100)
}

var x = 10, y = 10
function draw() {
  rect(x, y, 50, 20)
  x += 50 + 10
  if (x>width){
    x=0
    y+=30
  }
}