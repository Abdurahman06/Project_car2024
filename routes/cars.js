var express = require('express');
var router = express.Router();
var Car = require('../models/car').Car;

/* GET cars listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с cars');
});

/* Страница машин */
router.get("/:nick", async function(req, res, next) {
    var cars = await Car.find({nick: req.params.nick});
    console.log(cars)
    if(!cars.length) return next(new Error(" Нет такого автомобиля! "))
    var car = cars[0];
    res.render('car', {
    title: car.title,
    picture: car.avatar,
    desc: car.desc
    })
    });

module.exports = router;