function setup() {
  createCanvas(windowWidth, windowHeight)
  background(0)
}

function draw() {
  let clr1 = color("red")
  let clr2 = color("blue")

  for(var i = 0; i<30; i++){
    let midColor = lerpColor(clr1, clr2, i/30)
    fill(midColor)
    ellipse(0, 0, 50, 50)
    translate(20, 20)
    scale(0.9)
  }
}