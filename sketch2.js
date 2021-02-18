function setup() {
	createCanvas(500, 500);
	background("grey");
}

function draw() {
	background(255)
	noFill()
	//ellipse(width / 2, height / 2, 400, 50 + frameCount*10)
	// fill(frameCount)
	// rect(50, 50, 100, 100)

	// ellipse(width/2, height/2, 50)
	// rectMode(CENTER)
	// strokeWeight(frameCount % 2 ==0?5:1)
	// stroke(mouseX)
	// rect(width/2, height/2, 100+frameCount*5)

	// fill(mouseX, mouseY, 50)
	// stroke("white")
	// triangle(440+mouseX/2, 140, 160+frameCount, mouseX, 40, 160)
	fill("black")
	beginShape()
	vertex(440,160)
	vertex(340, 260)
	vertex(160,400)
	endShape()
}