var currentTime;
var $timeNow = document.querySelector(".timeNow")

function displayTime(){
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  $timeNow.textContent = hours + ":" + minutes + ":" + seconds;
}
//this calls the function
setInterval(displayTime, 1000);

function padNumbers() {
  
}
