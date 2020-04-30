function createXMLHttpRequest() {
	try {return new ActiveXObject("Msxml2.XMLHTTP");} catch (e) {}
	try {return new ActiveXObject("Microsoft.XMLHTTP");} catch (e) {}
	try {return new XMLHttpRequest(); } catch (e) {}
	alert("XMLHttpRequest non supportato");
	return null;
	}

	function $(id) { return document.getElementById(id);}

	window.onload = function() {
		var rq = createXMLHttpRequest();
		rq.onreadystatechange = function(){
			if (rq.readyState==4){
				if(rq.status==0){ // normalemente lo stato è 200, se non si passa tramite server lo si può mettere a zero, ma Chrome non accetta questo tipo di chiamate
				setTimeout(function(){
					$("contenuto").innerHTML = "Ricevo dal server ... </hr>";
					$("contenuto").innerHTML += rq.responseText; 					
				}, 3000);

				}
				else{alert("Errore di chiamata");}
				}
			}
			rq.open("GET", "data.txt", true); // apre la connessione
			rq.send(); // completa la richiesta ma qui è null perchè la richiesta ha un header ma non un body
		}
