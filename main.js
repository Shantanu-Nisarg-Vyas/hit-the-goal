var canvas = new fabric.Canvas('canvas1');

ballx = 10;
bally = 10;
holex = 940;
holey = 390;

var hole_obj = "";
var ball_obj = "";

function load_img(){
		fabric.Image.fromURL("golf-h.png", function(Img) {
			hole_obj = Img;
			hole_obj.scaleToHeight(50);
			hole_obj.scaleToWidth(50);
			hole_obj.set({
				top:holey,
				left:holex
			})
			canvas.add(hole_obj);
		})
	new_image();
}

function new_image(){ 
	fabric.Image.fromURL("ball.png", function(Img) {
		ball_obj = Img;
		ball_obj.scaleToHeight(50);
		ball_obj.scaleToWidth(50);
		ball_obj.set({
			top:bally,
			left:ballx
		})
		canvas.add(ball_obj);
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	if ((ballx==holex)&&(bally==holey)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="You Hit the Goal!!! You Won!!!";
		console.log("Goal Reached")
		document.getElementById("canvas1").style.borderColor="red";
	}
	
	else {
		if(keyPressed == '38') {
			up();
			console.log("up");
		}
		if(keyPressed == '40') {
			down();
			console.log("down");
		}
		if(keyPressed == '37') {
			left();
			console.log("left");
		}
		if(keyPressed == '39') {
			right();
			console.log("right");
		}
	}
	
	function up() {
		if(bally > 0){
			bally=bally-10;
			console.log("up")
			console.log(ballx+","+bally)
			canvas.remove(ball_obj);
            load_img();
		}
	}

	function down() {
		if(bally < 450) {
			bally=bally+10;
			console.log("down")
			console.log(ballx+","+bally)
			canvas.remove(ball_obj);
            load_img();
		} 
	}

	function left() {
		if(ballx > 10) {
			ballx=ballx-10;
			console.log("left")
			console.log(ballx+","+bally)
			canvas.remove(ball_obj);
            load_img();
		}
	}

	function right() {
		if(ballx < 950) {
			ballx=ballx+10;
			console.log("right")
			console.log(ballx+","+bally)
			canvas.remove(ball_obj);
            load_img(); 
		}
	}
	
}
