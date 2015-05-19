var currentTime;
var $timeNow = document.querySelector(".timeNow");
var $hours = document.querySelector("hours");
var $minutes = document.querySelector("minutes");
var $seconds = document.querySelector("seconds");
var $line = document.querySelector('.line');


function displayTime(){
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  $timeNow.textContent = hours + ":" + minutes + ":" + seconds;
  setWidth(); //this makes it change every second
}
//this calls the function, so you don't need to call the function earlier
setInterval(displayTime, 1000);

// function displayCurrentTime(time){
//   var timeNow = padNumbers(time);
//   $hours.textContent = time[0];
//   $minutes.textContent = time[1];
//   $seconds.textContent = time[2];
// }
//
// function padNumbers(time){
//   var leadingZero = [];
//   leadingZero[0] = ("0" + time[0]);
//   leadingZero[1] = ("0" + time[1]);
//   leadingZero[2] = ("0" + time[2]);
//   return leadingZero;
// }

// padNumbers(); // execute function

//WAKE UP TOMORROW AND MAKE THIS WORK

function setWidth() {
  var currentTime = new Date();
  var seconds = currentTime.getSeconds();
  var lineWidth = (seconds/60)*100;
  var linePercent = lineWidth + "%"; //adding a percent makes it into a string

  $line.style.width = linePercent;
}

// var timeBarPercent = String(timeBar) + "%";
