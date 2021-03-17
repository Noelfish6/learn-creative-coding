function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100)
}

function draw() {

}

function mousePressed() {
  fill(random(255), random(200,255), random(100,200))
  ellipse(mouseX, mouseY, 50)
  
}