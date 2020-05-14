const http = require("http");

var s = http.createServer();
s.listen(8383);

s.on('connection', function(stream){
	console.log('Connessione attiva\n');
});

s.once('connection', function(stream){
	console.log('Prima connessione\n');
});