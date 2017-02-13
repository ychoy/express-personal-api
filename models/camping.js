var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
//    Features = require('./features');

var CampingSchema = new Schema({
//  id: Number,
  title: String,
  park: String,
  description: String,
  trail: String,
  image: String,
  features: Array,
  coordinates: Array

});

var Camping = mongoose.model('Camping', CampingSchema);
module.exports = Camping;
