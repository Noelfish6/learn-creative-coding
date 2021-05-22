function setup() {
  createCanvas(windowWidth, windowHeight)
  background(0)
}

function draw() {
  translate(width/2, height/2)
  //push()
    fill("red")
    ellipse(0,0,50)
    ellipseMode(CORNER)
    fill("yellow")
    for(var i=0;i<16;i++){
      ellipse(30, -20, 120, 40)
      line(30, 0, 150, -10)
      rotate(PI/8)
    }
  //pop()
}
