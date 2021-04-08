function setup() {
  createCanvas(windowWidth, windowHeight)
  background(0)
}

function draw() {
  translate(0, height/2)
  for(var i=0; i<20; i++){
    // rect(0, 0, 100, 100)
    rect(random(100), random(100), random(40), random(40))
    translate(120, 0)
  }
}