let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
// let canvas2 = canvas.addHitRegion({id: "myCanvas"});

//Load images
img1 = new Image();
img1.src = 'bulbasaur.png';
img1.onload = function(){
ctx.drawImage(img1, canvas.width-300, canvas.height-300, 200,200);
}

img2 = new Image();
img2.src = 'bomb-sprite.jpg';
img2.onload = function(){
ctx.drawImage(img2, canvas.width/2 - 200, canvas.height/2 - 200, 100,100);
}

// Movement
setInterval(drawFunction, 1000);
setInterval(drawFunction2, 1000);
let x = 0;
let y = 0;
let x2 = 0;
let y2 = 0;

// make bomb sprite move randomly across screen
function drawFunction()
{
  x2 = Math.random() * canvas.width;
  y2 = Math.random() * canvas.height;

 // clear the canvas(clears screen)
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //draw the image
    ctx.drawImage(img2, x2, y2, 50, 50);     
}

// make bulbasaur sprite move randomly across screen
function drawFunction2()
{
  x = Math.random() * canvas.width;
  y = Math.random() * canvas.height;
   
    //draw the image
    ctx.drawImage(img1, x, y, 100, 100);
}

// click event
canvas.onmousedown = function (e) {

    if (e.clientX > x && 
        e.clientX < x + 50 &&            
        e.clientY > y && 
        e.clientY < y + 50 )
        alert("You win!!!"); 

  // click event

    if (e.clientX > x2 && 
        e.clientX < x2 + 100 &&            
        e.clientY > y2 && 
        e.clientY < y2 + 100)
        alert("You lose!");   
}
     



