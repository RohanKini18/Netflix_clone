document.getElementById("sign").addEventListener('click', goTohomePage);
document.getElementById("now").addEventListener('click', goTohomePage);
function goTohomePage(){
  location.href ="index.html"    

}

var timeLeft = 30;
  var elem = document.getElementById('some_div');
  
  var timerId = setInterval(countdown, 1000);
  
  function countdown() {
    if (timeLeft == -1) {
      clearTimeout(timerId);
      goTohomePage();
    } else {
      elem.innerHTML = timeLeft + ' seconds remaining';
      timeLeft--;
    }
  }