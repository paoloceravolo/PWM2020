const http = require("http");
const fs = require('fs');

var server = http.createServer();

server.on('request', (req, res)=>{
	console.log("Incoming request: " +req.method+ " " + req.url);
	//console.log(req.url);
	path = process.cwd()+req.url;

	fs.readdir(path, function(err, files){
		if(err){
			res.writeHead(400, {'Content-Type': 'application/json'});
			res.end(JSON.stringify(err) + '\n');
		}
		res.writeHead(400, {'Content-Type': 'application/json'});
		res.end(JSON.stringify(files) + '\n');
	});
});

server.on('error', function(err){
	console.log(err);
});

server.listen(8383);