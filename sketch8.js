function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100)
}

function draw() {

}

function mousePressed() {
  var count = int(random(5, 15))
  var r = random(5, 50)
  for(var i=0; i<count;i++){
  fill(random(255), random(200,255), random(100,200))
  ellipse(mouseX + i*5, mouseY, r)
  }
}
