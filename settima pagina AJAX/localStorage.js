var linkTag = document.getElementsByTagName('link');

linkTag[0].href = localStorage.getItem("theme");

document.getElementById("light").addEventListener("click", displayLight);
document.getElementById("dark").addEventListener("click", displayDark);

function displayLight(){
	localStorage.setItem("theme","style.css");
	linkTag[0].href = localStorage.getItem("theme");
}

function displayDark(){
	localStorage.setItem("theme","style2.css");
	linkTag[0].href = localStorage.getItem("theme");
}

var url = linkTag[0].href;
var char = url.lastIndexOf("/")+1;
var filename = url.substr(char);
var path = url.slice(0,char);

//console.log(linkTag[0].href);
//console.log(path + " __ " + filename);
