const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RestaurantsSchema = new Schema({
	// name: {
	// 	type: String,
	// 	// required: [true, 'Please type in a name'],
	// },
	// email: {
	// 	type: String,
	// 	// required: [true, 'Please type in an email address'],
	// },
	// message: {
	// 	type: String,
	// 	// required: [true, 'Please type in a message'],
	// },
});

const Restaurants = mongoose.model('Restaurants', RestaurantsSchema);

module.exports = Restaurants;
