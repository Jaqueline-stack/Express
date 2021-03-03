var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FES Aragon' });
});

router.get('/hola', function(req, res, next) {
  res.render('<h1>Hola<h1>', { title: 'Express' });
});

module.exports = router;
