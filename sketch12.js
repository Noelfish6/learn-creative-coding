function setup() {
  createCanvas(windowWidth, windowHeight)
  background(0)
}

function draw() {
  for(var i = 0; i<30; i++){
    ellipse(0, 0, 50, 50)
    translate(20, 20)
  }
}