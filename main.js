var currentTime;
var $timeNow = document.querySelector(".timeNow");
var $hours = document.querySelector("hours");
var $minutes = document.querySelector("minutes");
var $seconds = document.querySelector("seconds");
var $line = document.querySelector('.line');

function displayTime(){
  var currentTime = new Date();
  var hours = ("0" + currentTime.getHours()).slice(-2);
  var minutes = ("0" + currentTime.getMinutes()).slice(-2);
  var seconds = ("0" + currentTime.getSeconds()).slice(-2);
  $timeNow.textContent = hours + ":" + minutes + ":" + seconds;
  setWidth(); //this makes it change every second
}
//this calls the function, so you don't need to call the function earlier
setInterval(displayTime, 1000);

function setWidth() {
  var currentTime = new Date();
  var seconds = currentTime.getSeconds();
  var lineWidth = (seconds/60)*100;
  var linePercent = lineWidth + "%"; //adding a percent makes it into a string

  $line.style.width = linePercent;
}
