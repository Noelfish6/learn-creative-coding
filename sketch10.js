function setup() {
  createCanvas(windowWidth, windowHeight)
  background(100)
}

function draw() {
  var clr1 = color("#6fdbd7")
  var clr2 = color("salmon")

  for(i=0; i<width; i+=50){
    var ratio = map(i, 0, width, 0, 1)
    var middleColor = lerpColor(clr1, clr2, ratio)
    fill(middleColor)
    rect(i, height/2, 50, 50)
  }
}