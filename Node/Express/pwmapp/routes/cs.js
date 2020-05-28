var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:csid', function(req, res, next) {
	let param = req.params.csid;
  res.render('cs', { title: 'Prima pagina con Express', exercise: 'Centro sportivo '+param, year: 'A.A. 2019/2020', param: param});
});

module.exports = router;
