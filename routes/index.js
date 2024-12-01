var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Мерседес */
router.get('/mercedes', function(req, res, next) {
  res.render('car', {
  title: "Мерседес",
  picture: "images/mers.png",
  desc: "Автомобили Mercedes-Benz представляют собой сочетание традиционного немецкого качества и современных технологий, ориентированных на предоставление комфорта, безопасности и престижа своему владельцу. Они, как правило, позиционируются в премиум-сегменте рынка, что отражается в их цене и комплектации."
  });
  });
  

/* Страница Бмв */
router.get('/bmw', function(req, res, next) {
  res.render('car', {
  title: "Бмв",
  picture: "images/bmw.png",
  desc: "BMW — это автомобили для тех, кто ценит прежде всего удовольствие от вождения и современные технологии, а также высокое качество и стильный дизайн."
  });
  });


  /* Страница Лада */
router.get('/lada', function(req, res, next) {
  res.render('car', {
  title: "Лада",
  picture: "images/lada.png",
  desc: "Автомобили Лада — это бренд, производимый российским автопроизводителем АвтоВАЗ. Лада была основана в 1966 году и стала одним из самых известных автомобильных брендов в России и странах СНГ. Модели Лада известны своей доступностью, простотой в обслуживании и надежностью."
  });
  });


module.exports = router;
