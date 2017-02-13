var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FeaturesSchema = new Schema({
  features: Array
});

var Features = mongoose.model('Features', FeaturesSchema);
module.exports = Features;
