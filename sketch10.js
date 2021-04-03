function setup() {
  createCanvas(windowWidth, windowHeight)
  background(100)
}

function draw() {
  blendMode(BLEND)
  background(255)
  blendMode(MULTIPLY)
  var clr1 = color("#6fdbd7")
  var clr2 = color("salmon")

  noStroke()

  for(i=0; i<width*2; i+=100){
    clr1.setAlpha(30)
    fill(clr1)
    ellipse(0, height/2, i)
  }

  for (i = 0; i < width * 2; i += 100) {
    clr2.setAlpha(30)
    fill(clr2)
    ellipse(width, height / 2, i)
  }

}