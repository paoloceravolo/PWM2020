const http = require("http");

function processa(request, response){
	console.log("Richiesta in arrivo: " + request.method + " " + request.url);
	
	let url_l = request.url.length;

	let corpo = 'Sono qui mi hai chiamato!\n';
	let content_l = corpo.length;

	console.log(url_l + " vs " + content_l);

	response.writeHead(200, {'Content-Length': content_l, 'Content-Type': 'text/plain'});

	function returnResp(){
		if (content_l < url_l){
			response.end("Errore dal server!");
		}else{response.end(corpo);}
	};

	returnResp();

}

var s = http.createServer(processa);
s.listen(8383);