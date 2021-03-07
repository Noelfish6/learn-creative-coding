function setup() {
  createCanvas(windowWidth, windowHeight)
  background(100)
}

var x = 10, y = 10
function draw() {
  var w = random(30,80)
  fill(100 + random(155), 59, 59)
  if (frameCount % 3 == 0){
    fill('white')
  }
  rect(x, y, w, 20)
  x += w + 10
  if (x>width){
    x=0
    y+=30
  }
}