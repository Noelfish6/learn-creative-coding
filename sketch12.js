function setup() {
  createCanvas(windowWidth, windowHeight)
  background(0)
}

function draw() {
  translate(0, height/2)
  colorMode(HSB)
  for(var i=0; i<20; i++){
    fill(i*10 + random(-20, 20), 80, 100)
    // rect(0, 0, 100, 100)
    rect(random(100), random(100), random(40), random(40))
    translate(120, 0)
  }
}