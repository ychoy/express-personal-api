var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
	TrailsFeatures = require("./trailsfeatures");

var TrailsCoordinatesSchema = new Schema({
	longitude: Number,
	latitiude: Number
});

var TrailsSchema = new Schema({
  _id: Number,
  name: String,
  description: String,
	coordinates: [TrailsCoordinatesSchema],
	length: String,
	features: {
		type: Schema.Types.ObjectId,
		ref: 'TrailsFeatures'
	}
});

var Trails = mongoose.model('Trails', TrailsSchema);

module.exports = Trails;

