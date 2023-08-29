var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function newImage()
{
	
	fabric.Image.fromURL('https://www.eventstodayz.com/wp-content/uploads/2020/08/happy-birthday-gif-2024-songs-wishes.gif', function(Img) {
	blockImageObject = Img;
		
	blockImageObject.scaleToWidth(700);
	blockImageObject.scaleToHeight(510);
	blockImageObject.set({
	top:0,
	left:0
	});
	canvas.add(blockImageObject);
	});
	
}

function playSound(){
	x.play();
}
