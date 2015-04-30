var start = document.getElementById("start");
var reset = document.getElementById("reset");
var pause = document.getElementById("pause");
var timer = document.getElementById("timer");
var milsecond = 0;
var second = 0;
var minute = 0;
var hour = 0;
var clockRunning = false;


var timerStart = function(){
	add();
	timer.innerHTML = "Time Elapsed: " + hour + ":" + minute + ":" + second + ":" + milsecond; milsecond++;
}

var timerStop = function(){
	timer.innerH
}



start.addEventListener("click", function(){
	if(clockRunning === false){
		interval = setInterval(timerStart, 10);
		clockRunning = true;
	} 
});

pause.addEventListener("click", function(){
	clearInterval(interval);
	clockRunning = false;
})

reset.addEventListener("click", function(){
	timer.innerHTML = "Stop Watch";
	clockRunning = false;
	milsecond = 0;
	second = 0;
	minute = 0;
	hour = 0;
})


var add = function() {
	if (milsecond >= 100){
		milsecond = 0;
		second ++;
	}
	if (second >= 60){
		second = 0;
		minute++;
	}
	if (minute >= 60){
		minute = 0;
		hour++;
	}
}