function time(){

	var date = new Date();

	let h = date.getHours(); // 0-23
	let m = date.getMinutes(); // 0-59
	let s = date.getSeconds(); // 0-59
	let meridien = "AM";

	console.log(typeof h);

	if(h === 0){h = 12;}

	if(h > 12){
		h = h - 12;
		meridien = "PM";
	}

	h = (h<10)? "0"+h : h;
	m = (m<10)? "0"+m : m;
	s = (s<10)? "0"+s : s;


	let currTime = h + ":" + m + ":" + s + ":" + meridien;
	console.log(currTime);

	let xss = "<img src=\"foo.img\" onerror=\"alert(document.cookie)\">";

	document.getElementById("clock").innerText = currTime; 
	//document.getElementById("clock").innerHTML = xss; 
	window.setTimeout(time, 1000);

}

time();