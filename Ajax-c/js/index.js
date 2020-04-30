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
				if(rq.status==200){ // normalemente lo stato è 200, se non si passa tramite server lo si può mettere a zero, ma Chrome non accetta questo tipo di chiamate
				$("contenuto").innerHTML = "Ricevo dal server ... <hr />";
				$("contenuto").innerHTML += rq.responseText; 
				}
				else{alert("Errore di chiamata");}
				}			
			}
			rq.open("GET", "http://en.wikipedia.org/w/api.php?action=query&format=json&callback=data&prop=revisions&rvprop=content&lllimit=500&titles=Q_(novel)", true); // apre la connessione 
			// callback=data consente di eserire il retrun della funzione di calback in una funzione, questo è alla base dei meccanismi chimati JSONP che aggirano l'enforcement della sameorigin policy incapsulando al response in questa funzione
			// per le altre proprietà delle API WIkipedia vedi 
			// con anyorigin.com ho un servizio di proxy che mi aggira l'enforcement edella policy.
			
			rq.send(); // completa la richiesta ma qui è null perchè la richiesta ha un header ma non un body 
		}