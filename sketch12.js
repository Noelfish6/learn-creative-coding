function setup() {
  createCanvas(windowWidth, windowHeight)
  background(0)
}

function draw() {
  translate(0, height/2)
  for(var i=0; i<20; i++){
    rect(0, 0, 50, 50)
    ellipse(0, 0, 50, 50)
    translate(50, 0)
  }
}