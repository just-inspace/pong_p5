var players = [];
var ball;
var scores = [0, 0];

function setup() {
	createCanvas(500, 500);
	players[0] = new Player(10);
	players[1] = new Player(480);
	ball = new Ball();
}

function draw() {
	background(50);

	noStroke();

	fill(255);
	textSize(25);
	text(scores[0], width/2 - 65, 40);
	text(scores[1], width/2 + 50, 40);

	for (var i = 0; i < 5; i++) {
		rect(width/2 - 10, i * 100 + 10, 20, 80);
	}

	for (var i = 0; i < 2; i++) {
		players[i].update();
		players[i].draw();

		ball.bounce(players[i]);
	}

	var adds;
	if ((adds = ball.scoring()) < 2) {
		scores[adds] = scores[adds] + 1;
		ball.reset();
	}

	ball.update();
	ball.draw();

	if (keyIsDown(87)) {
		players[0].move(-1);
	}

	if (keyIsDown(83)) {
		players[0].move(1);
	}

	if (keyIsDown(UP_ARROW)) {
		players[1].move(-1);
	}

	if (keyIsDown(DOWN_ARROW)) {
		players[1].move(1);
	}
	
}
