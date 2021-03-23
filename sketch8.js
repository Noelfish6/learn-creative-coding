function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100)
}

function draw() {
  background(0, 1)
}

function mouseMoved() {
  var count = int(random(5, 15))
  var r = random(5, 50)
  for(var i=0; i<count;i++){
  fill(random(255), random(200,255), random(100,200))
    ellipse(mouseX + random(-50, 50), mouseY + random(-50, 50), r)
  }
}
