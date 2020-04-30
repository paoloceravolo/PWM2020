// instanzio l'oggetto XMLHttpRequest
var xhr = new XMLHttpRequest();

// comportamento dell'interprete
xhr.onreadystatechange = function(){
	if(xhr.readyState === 4){
		if(xhr.status === 200){
			var resp = JSON.parse(xhr.response);
			console.log(resp[16].id);
		}
	}
}

// imposto la chiamata HTTP
xhr.open('GET','https://www.dati.lombardia.it/resource/5bbn-8w23.json',true);

// invio la richiesta
xhr.send();