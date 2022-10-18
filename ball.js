//Global Variables
var positionX = 0;
var positionY = 0;

var velocity = 100;
var ball = document.getElementById('ball');

var reverse = false;

var ballType = ['beachBall.png','soccerBall.png','tennisBall.png'];



function show(value){
  var displayBall =document.createElement('img');
  console.log('in show() function');
  container = ballType[value];
    if(value===0){
    // image
    //  var displayBall = document.createElement('img')
      displayBall.src = 'beachBall.png'
     displayBall.className= 'ball' 
     ball.appendChild(displayBall)
    }
    else if(value===1){
      // image
    //    var displayBall = document.createElement('img')
        displayBall.src = 'soccerBall.png'
       displayBall.className= 'ball' 
       ball.appendChild(displayBall)
      }
      else if(value===2){
        // image
    //      var displayBall = document.createElement('img')
          displayBall.src = 'tennisBall.png'
         displayBall.className= 'ball' 
         ball.appendChild(displayBall)
        }
}
  
//write a function that can change the position of the html element "ball"
function moveBall() {
  
//x-axis            y-axis
  var Xmin = 0;     var Ymin = 0;
  var Xmax = 300;   var Ymax = 300;

  if(reverse){
   positionX -= velocity;
   ball.style.left = positionX + 'px';

   positionY -= velocity;
   ball.style.top = positionY + 'px';
  }
  else{
   positionX += velocity;
   ball.style.left = positionX + 'px';

   positionY += velocity;
   ball.style.top = positionY + 'px';

  }

  
  if (positionX > Xmax || positionX === Xmin ||
      positionY > Ymax || positionY === Ymin) 
      reverse = !reverse;
  
}

// This call the moveBall function every 100ms
setInterval(moveBall, 100);
//////////////////////////////////////////
//////////////////////////
//////////////
