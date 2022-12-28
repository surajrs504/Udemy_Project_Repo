setInterval(function (){
	var currentTime= new Date();
	var hour=currentTime.getHours();
	var minutes=currentTime.getMinutes();
	var seconds= currentTime.getSeconds();
	var merdian="AM";
	if(hour>12){
	merdian="PM";
	}
	if(hour>12){
			hour-=12;
	}
	if(seconds<10)
		seconds="0"+seconds;
	
	if(minutes<10)
		minutes="0"+minutes;
	
	
	var time= hour+" : "+minutes+" : "+seconds+"  " + merdian;
	document.getElementById("clock").innerText=time;
}, 1000);

