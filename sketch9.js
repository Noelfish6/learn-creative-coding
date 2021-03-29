function setup() {
  createCanvas(windowWidth, windowHeight)
  background(100)
}

function draw() {
  colorMode(HSB)
  for(var i=0; i < width; i+=50){
    var h = map(i, 0, width, 0, 360)
    for(var o=0; o<height; o+=50){
      fill((h+o+frameCount)/2%360, mouseY/5, mouseX/5)
      ellipse(i, o, 50)
    }
  }
}