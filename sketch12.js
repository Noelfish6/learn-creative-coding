function setup() {
  createCanvas(windowWidth, windowHeight)
  background(0)
}

function draw() {
  translate(width/2, height/2)
  let clr1 = color("red")
  let clr2 = color("blue")
  angleMode(DEGREES)
  
  for(var o =0; o<8; o++){
    rotate(o / 8 * 360)
    rotate(frameCount)
    let scaleDelta = random(0.9, 0.98)
    push()
    for(var i = 0; i<30; i++){
      let midColor = lerpColor(clr1, clr2, i/30)
      fill(midColor)
      ellipse(0, 0, 50, 50)
      translate(20, 20)
      scale(0.9)
    }
    pop()
  }
}