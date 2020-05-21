const http = require("http");
const fs = require('fs');

var server = http.createServer();

error = null;
output = null;

function lista_img(path){
	fs.readdir(path, (err, files)=>{
		if(err){error = {'error': err}; return}
		else{output = {'error': null, 'data': files}; return}
	});
}

server.on('request', (req, res)=>{
	console.log("Incoming request: " +req.method+ " " + req.url);
	//console.log(req.url);
	path = process.cwd()+req.url;

	lista_img(path);
		if(error !== null){
			res.writeHead(400, {'Content-Type': 'application/json'});
			res.end(JSON.stringify(error) + '\n');
		}
		res.writeHead(400, {'Content-Type': 'application/json'});
		res.end(JSON.stringify(output) + '\n');

});

server.on('error', function(err){
	console.log(err);
});

server.listen(8383);