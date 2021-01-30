const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RestaurantsSchema = new Schema({
	name: { type: String },
	address: { type: String },
	phoneNumber: { type: String },
	rating: { type: Number },
	website: { type: String },
	image: { type: String },
});

const Restaurants = mongoose.model('Restaurants', RestaurantsSchema);

module.exports = Restaurants;
