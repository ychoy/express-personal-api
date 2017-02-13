var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api");

module.exports.Camping = require("./camping"); 
module.exports.CampingFeatures = require("./campingfeatures");
