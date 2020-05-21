const http = require("http");
const fs = require('fs');

var server = http.createServer();

function lista_img(path, callback){
	fs.readdir(path, (err, files)=>{
		if(err){
			error = {'error': err};
			callback(error);
		}
		else{
			output = {'error': null, 'data': files};
			callback(output.error, output.data);
		}
	});
}

server.on('request', (req, res)=>{
	console.log("Incoming request: " +req.method+ " " + req.url);
	//console.log(req.url);
	path = process.cwd()+req.url;

	lista_img(path, createResp);

	function createResp(error, data){
		if(error !== null){
			res.writeHead(400, {'Content-Type': 'application/json'});
			res.end(JSON.stringify(error) + '\n');
		}
		res.writeHead(400, {'Content-Type': 'application/json'});
		res.end(JSON.stringify(data) + '\n');
	}
	});

server.on('error', function(err){
	console.log(err);
});

server.listen(8383);