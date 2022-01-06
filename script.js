let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

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
setInterval(drawFunction, 700);
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

// declaring variables for score
let score;
score = 0;

// click event for bulbasaur img
canvas.onmousedown = function (e) {

    if (e.clientX > x && 
        e.clientX < x + 100 &&            
        e.clientY > y && 
        e.clientY < y + 100 ){
        score++;
        alert("score= " + score);
        }

  // click event for bomb-sprite img

    if (e.clientX > x2 && 
        e.clientX < x2 + 100 &&            
        e.clientY > y2 && 
        e.clientY < y2 + 100) {
        score--;
        alert("score= " + score); 
        }

    if (score === 10){
      alert("YOU WIN!!");
    }
    else if(score < -1){
      alert("Sorry you lose");
    }
}
     



