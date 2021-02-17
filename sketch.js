function setup() {
	createCanvas(windowWidth, windowHeight);
	background("white")
}

function draw() {
	if (mouseIsPressed){
		fill(mouseX, mouseY, frameCount)
		ellipse(mouseX, mouseY, 100, 100)
	} else {
		fill(mouseY, mouseX, frameCount)
		rect(mouseX, mouseY, 100, 100)	
	}
	// print(frameCount);
}