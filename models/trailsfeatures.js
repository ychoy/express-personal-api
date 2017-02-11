var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TrailsFeaturesSchema = new Schema({
  features: Array,
});

var TrailsFeatures = mongoose.model('TrailsFeatures', TrailsFeaturesSchema);
module.exports = TrailsFeatures;
