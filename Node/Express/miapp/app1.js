const express = require('express');
const port = 3000;
const app = express();

app.get('/', (req, res)=>{
	res.send('Sono qui mi hai chiamato \n');
});

app.get('/cs/:centro', (req, res)=>{
	const centro = req.params.centro;
	res.send('Pagina del centro sportivo ' + centro);
});

app.get('*', (req, res)=>{
	res.status(404);
	res.send('Pagina non disponibile \n');
});

app.listen(port, function(){
	console.log('Server in esecuzione sulla porta : ' + port);
});

module.exports = app;