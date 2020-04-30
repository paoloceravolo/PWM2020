function $(id) { return document.getElementById(id);}

		// Create the XHR object.
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

// Helper method to parse the title tag from the response.
function getTitle(text) {
return text.match('<title>(.*)?</title>')[1];
}

// Make the actual CORS request. 
// Using this example it is necessary to set the innerHtml += titolo and uncomment the line creating the var titolo
//window.onload = function makeCorsRequest() {
  //var url = 'http://it.wikipedia.org/wiki/Governo_della_Repubblica_Italiana';
  
  window.onload = function makeCorsRequest() {
  var url = 'https://www.dati.lombardia.it/api/views/cx5a-ifkw/rows.json?accessType=DOWNLOAD';

  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    var rq = xhr.responseText;
    var rq = JSON.parse(rq);
   // var titolo = getTitle(rq);
    //alert('Response from CORS request to ' + url + ': ' + text);
    $("contenuto").innerHTML = "Ricevo dal server ... <hr />";
    // $("contenuto").innerHTML += titolo;
     $("contenuto").innerHTML += rq[0].eventi.evento[0]["-id"];
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  xhr.send();
}