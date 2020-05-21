const express = require('express');
const path = require('path');

const port = 3000;
const app = express();

const routesIndex = require('./routes/index.js');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(function timeLog(req, res, next){
	console.log('Sever time: ', Date.now());
	next()
});

app.use('/', routesIndex);

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