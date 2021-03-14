function setup() {
  createCanvas(windowWidth, windowHeight)
  background(0)
  noStroke()
  for (var x = 0; x < width/2; x+=5){
    for (var y = 0; y < height/2; y+=5){
      fill(random(200,255), random(255), random(255))
      rect(x, y, 40)
    }
  }
}

function draw() {

}