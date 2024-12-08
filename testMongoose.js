const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
var schema = mongoose.Schema({ name: String })
schema.methods.brum = function(){
console.log(this.name + " дал боком")
}
const Car = mongoose.model('Car', schema);
const auto = new Car({ name: 'Mercedes' });
auto.save().then(() => auto.brum());