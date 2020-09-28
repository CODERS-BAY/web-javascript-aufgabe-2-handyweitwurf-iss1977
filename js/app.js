var image = new Image;
var imageHuman=new Image;
imageHuman.src="./images/human-icon-transparent.png";
image.src = "https://i.stack.imgur.com/C7qq2.png?s=328&g=1";
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.style.position = "absolute";
canvas.style.top = "0px";
canvas.style.left = "0px";
document.getElementById("id-my-play-ground").appendChild(canvas); 


var w,h;
function resize(){
    w = canvas.width = document.getElementById("id-my-play-ground").offsetWidth
    h = canvas.height = document.getElementById("id-my-play-ground").offsetHeight
    
    //  w = canvas.width = innerWidth;
    //  h = canvas.height = innerHeight;
    }
resize();
window.addEventListener("resize",resize);

//drawImage(image,90);
//drawImage(imageHuman,90);

function drawImage(image, x,y,sizeX,sizeY,rotation){
// a	Horizontal scaling	
// b	Horizontal skewing	
// c	Vertical skewing	
// d	Vertical scaling	
// e	Horizontal moving	
// f	Vertical moving

    ctx.setTransform(1, 0, 0, 1, 0,0); // sets scales and origin
    ctx.rotate(rotations*Math.PI/180);
    ctx.drawImage(image, x,y,sizeX, sizeY);
}

// Start the animation when the window loads.
window.onload = function() {
    requestAnimationFrame(update);
}

rotation=0;

var timer=null;

function update(){

    rotation++;
    //drawImage(imageHuman,300,300,20,50,rotation/100);
    //drawImage(image, rotation);
    rotateAndRenderImg(imageHuman,00,400,100,100,0);
    rotateAndRenderImg(imageHuman,200,200,50,50,rotation);
    
        
    cancelAnimationFrame(timer);
    timer= requestAnimationFrame(update);

}



function rotateAndRenderImg(img,x,y,sizeX,sizeY,ang) {
    
    ctx.save()
    
    ctx.translate(x ,y)    
    ctx.rotate(Math.PI / 180 * (ang))
    ctx.drawImage(img, -sizeX / 2, -sizeY / 2, sizeX, sizeY)
    ctx.restore()
}

