function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
}


// draw three circles
// var r = 0
// function draw() {

//     r = mouseX/2
//     var brightness = r/2 +40
//     fill(brightness)
//     ellipse(width/2, height/3, r, r)
//     ellipse(width/2, height/2, r, r)
//     ellipse(width/2, height/6, r, r)  
// }

// draw dropping circle
var r = 0
var x = 50, y = 50
var vx = 3, vy = 3
var txt = "Hello"
function draw() {
  // background(0)
  ellipse(x, y, 50)
  text(txt, x+100, y)
  txt += "."
  x = x + vx
  y = y + vy
  vy += 0.2
  if (y > height) {
    vy = -vy * 0.6
    y = height
  }  
}