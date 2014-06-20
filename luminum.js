	/*
	* luminum.js by Marco Trombino
	* Released under the GPLv3 license
	*
	* 2013-2014
	* Version: 1.0
	*/
	
	var Luminum = function (color) {

		this.color = color;
		this.colorBright = false;
		this.tollerance = 0;
		this.color = this.color.replace(/rgb/, "");
		this.color = this.color.replace(/[()#]/g, "");
	};
	    
	Luminum.prototype.getColorBrightness = function () {	
		var brightness;
	
		if(this.color.indexOf(',') > -1) {
		brightness = this.rgbColorBrightness();
		}
		else {
		brightness = this.hexColorBrightness();
		}
	
		if(brightness>130) {
		this.colorBright = true;
		}
		
		return this.colorBright;
	};	
	
	Luminum.prototype.rgbColorBrightness = function() {	
		var rgbColor = this.color.split(',');
		var r = rgbColor[0];
		var g = rgbColor[1];
		var b = rgbColor[2];	
		var brightness = (((r*299) + (g*587) + (b*114)) / 1000) - this.tollerance;

		return brightness;	
	};	
	
	Luminum.prototype.hexColorBrightness = function() {
		var bigint = parseInt(this.color, 16);
		var r = (bigint >> 16) & 255;
		var g = (bigint >> 8) & 255;
		var b = bigint & 255;	
		var brightness = (((r*299) + (g*587) + (b*114)) / 1000) - this.tollerance;
	
		return brightness;	
	};
