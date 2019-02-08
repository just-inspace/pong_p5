function Player(x) {
	this.w = 10;
	this.h = 50
	this.xset = x;
	this.yspeed = 5;
	this.yc = height/2 - this.h/2;
	this.update = function() {

	}

	this.move = function(dir) {
		this.yc = constrain(this.yc + (this.yspeed * dir), 0, height - this.h);
	}

	this.getx = function() {
		return this.xset;
	}

	this.gety = function() {
		return this.yc;
	}

	this.getw = function() {
		return this.w;
	}

	this.geth = function() {
		return this.h;
	}

	this.draw = function() {
		fill(255);
		rect(this.xset, this.yc, this.w, this.h);
	}
}