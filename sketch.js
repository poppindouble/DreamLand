function setup() {
	var myCanvas = createCanvas(windowWidth, windowHeight);
 	myCanvas.parent('myCanvas');
 	background(255);
 	for(var x = 0; x <= myCanvas.width; x = x + 20) {
 		for(var y = 0; y <= myCanvas.height; y = y + 20) {
 			strokeWeight(0);
 			fill(128, 128, 128);
 			ellipse(x, y, 3);
 		}
 	}

 	console.log("wtf")
}

function draw() {
}