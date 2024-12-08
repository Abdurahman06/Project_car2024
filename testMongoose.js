const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
const Car = mongoose.model('Car', { name: String });
const auto = new Car({ name: 'Mercedes' });
auto.save().then(() => console.log('Брум'));
