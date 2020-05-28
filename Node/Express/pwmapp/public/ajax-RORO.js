// Script parameters usin RORO pattern: Receive Objects Return Objects 
const templateObj = {
  target: '.col-1-2 main',
  wrapper1: 'article',
  wrapper2: 'p',
  filter: null,
}

const ajaxcallObj = {
  method: 'GET',
  url: 'https://www.dati.lombardia.it/resource/5bbn-8w23.json',
  asynchronous: true,
}

localStorage.setItem("locations", "[{lat: -42.735258, lng: 147.438000},{lat: -43.999792, lng: 170.463352}]");
localStorage.setItem("labels", 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');

// chiamo la funzione con le sue callback
//callAjax(ajaxcallObj, templateObj, template, drawMap);

function callAjax(call, temp, callback, callback2){
// instanzio l'oggetto XMLHttpRequest
var xhr = new XMLHttpRequest();

// comportamento dell'interprete
xhr.onreadystatechange = function(){
	if(xhr.readyState === 4){
		if(xhr.status === 200){
			  callback(xhr.response, temp);
        callback2(xhr.response);
		}
	}
}

// imposto la chiamata HTTP
xhr.open(call.method,call.url,call.asynchronous);

// invio la richiesta
xhr.send();
}

function template(response, temp){

      //console.log(JSON.parse(response)[3].id);
      //console.log(target);

      let targ = document.querySelector(temp.target);
      let resp = JSON.parse(response);

      //console.log(resp[3].id);
      //console.log(targ);

      // pulisce l'elemento target
      targ.innerHTML = '';

      function appendResponse(item,index,arr){
       // debugger;
        //console.log(arr[index].id);
        //console.log(item.id);
        let newEle1 = document.createElement(temp.wrapper1);
        let newEle2 = document.createElement(temp.wrapper2);
        let textCont = document.createTextNode(item.id +" - "+ item.denominazione_struttura +" - "+ item.comune +" - "+ item.link.url);

        targ.appendChild(newEle1).appendChild(newEle2).appendChild(textCont);
        //console.log(index);
      }

      resp.forEach(appendResponse);
}

function drawMap(response){

    let resp = JSON.parse(response);
    let locations = [];
    let labels = [];

    function extract(item){
      if(item.location){
        let coor = {};
        coor.lat = item.location.coordinates[1];
        coor.lng = item.location.coordinates[0];
        //console.log(coor);
        locations.push(coor);
        labels.push(item.denominazione_struttura);
      }
    };
    resp.forEach(extract);
    //console.log(locations);
   if(locations[0]){
    locations = JSON.stringify(locations);
    localStorage.setItem("locations", locations);
    labels = JSON.stringify(labels);
    localStorage.setItem("labels", labels);
  };
}

 function initMap() {
        
        // Inizializza mappa
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: {lat: 45, lng: 10}
        });

        // Leggere le locations salvate in localStorage da drawMap
        let locations = localStorage.getItem("locations");
        locations = JSON.parse(locations);
        //console.log(locations[0]);

        // Leggere le labels salvate in localStorage da drawMap
        // Create an array of alphabetical characters used to label the markers.
        //let labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let labels = localStorage.getItem("labels");
        labels = JSON.parse(labels);
        console.log(labels[0]);



      // Loop through the results array and place a marker for each
      // set of coordinates.
      var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });

        // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }