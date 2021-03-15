function setup() {
  createCanvas(windowWidth, windowHeight)
  background(0)
  noStroke()
  var count = 0
  for (var x = 0; x < width; x+=50){
    for (var y = 0; y < height; y+=50){
      count += 1
      fill(random(200,255), random(255), random(255))
      if (count % 2 == 0){
        rect(x, y, 40)
      }
    }
  }
}

function draw() {

}