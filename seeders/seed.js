let mongoose = require('mongoose');
let db = require('../models');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/htxtacosDB', {
	useNewUrlParser: true,
	useFindAndModify: false,
});

let messageSeed = [
	{
		name: 'Inez Escandon',
		email: 'iescan4@gmail.com',
		message: 'Hello World!',
	},
];

let restaurantSeed = [
	{
		name: "Torchy's Tacos",
		address: '2411 S Shepherd Dr, Houston, TX 77019',
		// hours: [{"monday": }]
		phoneNumber: '713-595-8226',
		rating: -1,
		website: 'https://torchystacos.com/',
		image: 'https://via.placeholder.com/150',
	},
];

db.Restaurants.deleteMany({})
	.then(() => db.Restaurants.collection.insertMany(restaurantSeed))
	.then((data) => {
		console.log(data.result.n + ' records inserted!');
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});

db.Users.deleteMany({})
	.then(() => db.Users.collection.insertMany(messageSeed))
	.then((data) => {
		console.log(data.result.n + ' records inserted!');
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
