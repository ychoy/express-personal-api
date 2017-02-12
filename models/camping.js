var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    Trails = require('./trails');
    CampingFeatures = require('./campingfeatures');

var CampingGeometrySchema = new Schema({
      coordinates: Array,
      // first number is latitude
      // second number is longitude

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
  coordinates: [CampingGeometrySchema]

});

var Camping = mongoose.model('Camping', CampingSchema);
module.exports = Camping;
