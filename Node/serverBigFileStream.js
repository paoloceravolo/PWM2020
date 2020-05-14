const http = require("http");
const fs = require('fs');

var s = http.createServer();
s.listen(8383);

s.on('request', function(req, res){
	const hrstart = process.hrtime();
	const src = fs.createReadStream('./bigfile.txt');
	res.end(src);

	console.log('Connessione attiva\n');
	const hrend = process.hrtime(hrstart);
	console.info("Execution time: " + hrend);
});

s.on('error', (err)=>{
	console.error(err);
})