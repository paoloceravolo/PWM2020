var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Prima pagina con Express', exercise: 'Elenco dei centri sportivi della Lombardia', year: 'A.A. 2019/2020' });
});

module.exports = router;
