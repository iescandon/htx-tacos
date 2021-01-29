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

// db.TrailSystem.deleteMany({})
// 	.then(() => db.TrailSystem.collection.insertMany(trailSystemSeed))
// 	.then((data) => {
// 		console.log(data.result.n + ' records inserted!');
// 		process.exit(0);
// 	})
// 	.catch((err) => {
// 		console.error(err);
// 		process.exit(1);
// 	});

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
