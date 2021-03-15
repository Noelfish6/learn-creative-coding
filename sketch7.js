function setup() {
  createCanvas(windowWidth, windowHeight)
  background(0)
  noStroke()
  var count = 0
  for (var x = 0; x < width; x+=50){
    for (var y = 0; y < height; y+=50){
      count += 1
      fill(random(200,255), random(255), random(255))
      stroke(random(200, 255), random(255), random(255))
      if (count % 5 < 3){
        rect(x, y, 40, 40, 5)
        if (random() < 0.5 ){
          fill(0)
          noStroke()
          ellipse(x+20, y+20, 20)
          if (random() < 0.5){
            fill(random(200, 255), random(255), random(255))
            ellipse(x + 20, y + 20, 10)
          }
        }
      }
    }
  }
}

function draw() {

}