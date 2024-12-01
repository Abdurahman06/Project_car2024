var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Mercedes*/
router.get('/mercedes', function(req, res, next) {
  res.send("<h1>Страница Mercedes</h1>")
  });
  
/* Страница Bmw*/
router.get('/bmw', function(req, res, next) {
  res.send("<h1>Страница Bmw</h1>")
  });

  /* Страница Lada*/
router.get('/lada', function(req, res, next) {
  res.send("<h1>Страница Lada</h1>")
  });


module.exports = router;
