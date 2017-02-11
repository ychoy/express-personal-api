var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CampingFeaturesSchema = new Schema({
  features: Array,
});

var CampingFeatures = mongoose.model('CampingFeatures', CampingFeaturesSchema);
module.exports = CampingFeatures;
