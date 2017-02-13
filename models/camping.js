var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    CampingFeatures = require('./campingfeatures');

var CampingCoordinatesSchema = new Schema({
    coordinates: Array,
});

var CampingSchema = new Schema({
  _id: Number,
  title: String,
  park: String,
  description: String,
  trail: String,
  image: String,
  features: [{
    type: Schema.Types.ObjectId,
    ref: 'CampingFeatures'
  }],
  coordinates: [CampingCoordinatesSchema]

});

var Camping = mongoose.model('Camping', CampingSchema);
module.exports = Camping;
