function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
}

function draw() {
	noFill()
	//ellipse(width / 2, height / 2, 400, 50 + frameCount*10)
	// fill(frameCount)
	// rect(50, 50, 100, 100)

	// ellipse(width/2, height/2, 50)
	// rectMode(CENTER)
	// strokeWeight(frameCount % 2 ==0?5:1)
	// stroke(mouseX)
	// rect(width/2, height/2, 100+frameCount*5)
	fill(mouseX, mouseY, 50)
	stroke("white")
	triangle(440+mouseX/2, 140, 160+frameCount, mouseX, 40, 160)
}