const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
	name: {
		type: String,
		// required: [true, 'Please type in a name'],
	},
	email: {
		type: String,
		// required: [true, 'Please type in an email address'],
	},
	message: {
		type: String,
		// required: [true, 'Please type in a message'],
	},
});

const Users = mongoose.model('Users', UsersSchema);

module.exports = Users;
