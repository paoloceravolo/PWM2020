// Script parameters
const target = '.col-1-2 main';
const wrapper1 = 'article';
const wrapper2 = 'p';
const ajaxMethod = 'GET';
const ajaxUrl = 'https://www.dati.lombardia.it/resource/5bbn-8w23.json';

callAjax(template);

function callAjax(callback){
// instanzio l'oggetto XMLHttpRequest
var xhr = new XMLHttpRequest();

// comportamento dell'interprete
xhr.onreadystatechange = function(){
	if(xhr.readyState === 4){
		if(xhr.status === 200){
			 callback(xhr.response);
		}
	}
}

// imposto la chiamata HTTP
xhr.open(ajaxMethod,ajaxUrl,true);

// invio la richiesta
xhr.send();
}

function template(response){

      //console.log(JSON.parse(response)[3].id);
      //console.log(target);

      let targ = document.querySelector(target);
      let resp = JSON.parse(response);

      //console.log(resp[3].id);
      //console.log(targ);

      // pulisce l'elemento target
      targ.innerHTML = '';

      function appendResponse(item,index,arr){
       // debugger;
        //console.log(arr[index].id);
        //console.log(item.id);
        let newEle1 = document.createElement(wrapper1);
        let newEle2 = document.createElement(wrapper2);
        let textCont = document.createTextNode(item.id +" - "+ item.denominazione_struttura +" - "+ item.comune +" - "+ item.link.url);

        targ.appendChild(newEle1).appendChild(newEle2).appendChild(textCont);
        //console.log(index);
      }

      resp.forEach(appendResponse);
}