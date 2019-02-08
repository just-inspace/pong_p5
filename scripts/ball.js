function Ball(i) {
	this.size = 10;
	this.x = width/2 - 5;
	this.y = height/2 - 5;
	this.xspeed = 2;
	this.yspeed = 2;

	this.update = function() {
		this.x = constrain(this.x + this.xspeed, 0, width - this.size);
		this.y = constrain(this.y + this.yspeed, 0, height - this.size);

		if ((this.y === height - this.size) || (this.y === 0)) {
			this.yspeed = this.yspeed * -1;
		}
	}

	this.bounce = function(player) {
		if (this.y < player.gety() + player.geth() &&
			this.y + this.size > player.gety()) {
			if (this.x < player.getx() + player.getw() && 
				this.x + this.size > player.getx()) {
				this.xspeed = this.xspeed * -1.1;
				this.yspeed = this.yspeed * 1.1;
			}	
		}
	}

	this.scoring = function() {
		if (this.x === 0) {
			return 0;
		}
		if (this.x === width - this.size) {
			return 1;
		}
		return 2;
	}

	this.reset = function() {
		this.yspeed = 2;
		this.xspeed = 2;
		this.x = width/2 - 5;
		this.y = height/2 - 5;
	}

	this.draw = function() {
		fill(100, 100, 255);
		rect(this.x, this.y, this.size, this.size);
	}
}