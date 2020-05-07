var linkTag = document.getElementById('style');

linkTag.href = localStorage.getItem("theme");

document.getElementById("light").addEventListener("click", displayLight);
document.getElementById("dark").addEventListener("click", displayDark);

function displayLight(){
	localStorage.setItem("theme","style.css");
	linkTag.href = localStorage.getItem("theme");
	//location.reload();
}

function displayDark(){
	localStorage.setItem("theme","style2.css");
	linkTag.href = localStorage.getItem("theme");
	//location.reload();
}

var url = linkTag.href;
var char = url.lastIndexOf("/")+1;
var filename = url.substr(char);
var path = url.slice(0,char);

//console.log(linkTag[0].href);
//console.log(path + " __ " + filename);
