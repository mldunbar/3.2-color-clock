var currentTime;
var $timeNow = document.querySelector(".timeNow");
var $hours = document.querySelector("hours");
var $minutes = document.querySelector("minutes");
var $seconds = document.querySelector("seconds");
var $line = document.querySelector('.line');
var $body = document.querySelector('body');

function displayTime(){
  var currentTime = new Date();
  var hours = ("0" + currentTime.getHours()).slice(-2);
  var minutes = ("0" + currentTime.getMinutes()).slice(-2);
  var seconds = ("0" + currentTime.getSeconds()).slice(-2);

  $timeNow.textContent = hours + ":" + minutes + ":" + seconds;
  setWidth(); //this makes it change every second
}
function setWidth() {
  var currentTime = new Date();
  var seconds = currentTime.getSeconds();
  var lineWidth = (seconds/60)*100;
  var linePercent = lineWidth + "%"; //adding a percent makes it into a string
  $line.style.width = linePercent;
}

//this function from joelasonian

function hexifyWithZeroLead(tohex){
	var rtn = tohex.toString(16);
	return ( rtn.length == 1 ? "0" : "" ) + rtn;
}

function backgroundColor(){
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  var maxhours = 23;
  var maxminutes = 59;
  var maxseconds = 60;

  rednum = (Math.round(255 * (hours)/(maxhours)));
  greennum = (Math.round(255 * (hours)/(maxhours)));
  bluenum = (Math.round(255 * (hours)/(maxhours)));

  redhex = hexifyWithZeroLead(rednum);
  greenhex = hexifyWithZeroLead(greennum);
  bluehex = hexifyWithZeroLead(bluenum);

  $body.style.background = '#' + hours + minutes + seconds;
}

//this calls the function, so you don't need to call the function earlier
setInterval(displayTime, 1000);
setInterval(backgroundColor, 1000);
backgroundColor();
