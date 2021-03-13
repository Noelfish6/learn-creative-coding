function setup() {
  createCanvas(windowWidth, windowHeight)
  background(100)
}

function draw() {
  for(var x =0; x<width; x+=50){
    rect(x, height/2, 50)
  }
}