// JavaScript Document
function countdown() {
	target = new Date(2009, 01, 07, 19, 00, 00); //February 07, 2009 - 07:00:00 PM
	today = new Date();
	secs = (target-today) / 1000;
	if (secs > 0) {
		document.getElementById('days').innerHTML = formatNum(Math.floor(secs / 60 / 60 / 24)); //days
		document.getElementById('hours').innerHTML = formatNum(Math.floor(secs / 60 / 60 % 24)); //hours
		document.getElementById('minutes').innerHTML = formatNum(Math.floor(secs / 60 % 60)); //minutes
		document.getElementById('seconds').innerHTML = formatNum(Math.floor(secs % 60));
	} else {
		return -1;
	}
	setTimeout('countdown();', 1000);
}

function formatNum(num) {
	if (num < 10) {
		return "0" + num;
	} else {
		return num;
	}
}