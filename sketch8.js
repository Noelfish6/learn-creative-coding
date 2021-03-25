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
  var delta = sqrt(dist(pmouseX, pmouseY, mouseX, mouseY))*5
  for(var i=0; i<count;i++){
  fill(random(255), random(200,255), random(100,200))
    ellipse(mouseX + random(-delta, delta), mouseY + random(-delta, delta), r)
  }
}
