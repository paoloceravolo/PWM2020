var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

	if(req.session.page_views){
		console.log("Utente ha vistato la pagina " + req.session.page_views + " volte");
		req.session.page_views++;
	}else{
		req.session.page_views = 1;
		console.log("Prima volta che utente visita la pagina");
	};

  res.render('index', { title: 'Prima pagina con Express', exercise: 'Elenco dei centri sportivi della Lombardia', year: 'A.A. 2019/2020' });
});

module.exports = router;
