var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next){
	console.log('Router Index time: ', Date.now());
	next()
});

/* GET home page. */
router.use('/', function(req, res) {
	res.render('index', {title: 'Centri Sportivi della Lombardia'})	
});

module.exports = router;
