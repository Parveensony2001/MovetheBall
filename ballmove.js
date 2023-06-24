
document.addEventListener("DOMContentLoaded", function(){
  const ball = document.querySelector(".ball");
  const app = document.getElementById("app");

  let ballposition = {
    x : getrendomnumber(app.clientWidth - ball.offsetWidth),
    y : getrendomnumber(app.clientHeight - ball.offsetHeight)
  }
  
  updatemyposition();
 
  document.addEventListener('keydown' , function(event){
    const key = event.key;
    const step = 25;

    switch (key){
      case 'w':
        ballposition.y -= step;
        break;
      case 's':
        ballposition.y += step;
        break;
      case 'd' :
        ballposition.x += step;
        break;
      case 'a':
        ballposition.x -= step;
        break;
        default:return;
    }
  updatemyposition();
  positionrestiction();    
  })
  function positionrestiction(){
    const maxpositionX  = app.clientWidth - ball.offsetWidth;
    const maxpositionY  = app.clientHeight - ball.offsetHeight;

    if(ballposition.x < 0){
      ballposition.x = 0;
    }else if(ballposition.x > maxpositionX){
      ballposition.x = maxpositionX;
    }
    if(ballposition.y < 0){
      ballposition.y = 0;
    }else if(ballposition.y > maxpositionY){
      ballposition.y = maxpositionY;
    }
  }    

  function updatemyposition(){
    ball.style.left = ballposition.x + 'px' 
    ball.style.top = ballposition.y + 'px' 
    // const positionX  = app.clientWidth - ball.offsetWidth;
    // const positionY  = app.clientHeight - ball.offsetHeight;
  }
  function getrendomnumber(max){
    return Math.floor(Math.random()*max);
  }
})