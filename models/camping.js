var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    Trails = require('./trails');
    CampingFeatures = require('./campingfeatures');

var CampingCoordinatesSchema = new Schema({
      longitude: Number,
      latitude: Number
});

var CampingSchema = new Schema({
  _id: Number,
  title: String,
  description: String,
  trails: {
    type: Schema.Types.ObjectId,
    ref: 'Trails'
  },
  image: String,
  features: {
    type: Schema.Types.ObjectId,
    ref: 'CampingFeatures'
  },
  coordinates: [CampingCoordinatesSchema]

});

var Camping = mongoose.model('Camping', CampingSchema);
module.exports = Camping;
