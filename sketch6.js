function setup() {
  createCanvas(windowWidth, windowHeight)
  background(100)
}

function draw() {
  background(0)
  let r = 100
  for(var i = 0; i<10; i++){
    fill(map(i, 0, 10, 0, 255), 0, 255)
    ellipse(i*mouseX, height/5, 100-i*5)
  }
}