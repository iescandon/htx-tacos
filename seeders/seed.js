let mongoose = require('mongoose');
let db = require('../models');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/htxtacosDB', {
	useNewUrlParser: true,
	useFindAndModify: false,
});

// let messageSeed = [
// 	{
// 		name: 'Inez Escandon',
// 		email: 'iescan4@gmail.com',
// 		message: 'Hello World!',
// 	},
// ];

let restaurantSeed = [
	{
		name: "Torchy's Tacos",
		address: '2411 S Shepherd Dr, Houston, TX 77019',
		// hours: [{"monday": }]
		phoneNumber: '713-595-8226',
		rating: [],
		website: 'https://torchystacos.com/',
		image:
			'https://cdn.abcotvs.com/dip/images/5729970_table-shot-above-view.jpg',
	},
	{
		name: 'Velvet Taco',
		address: '4819 Washington Ave, Houston, TX 77007',
		// hours: [{"monday": }]
		phoneNumber: '832-834-5908',
		rating: [2, 3, 4],
		website: 'https://www.velvettaco.com/',
		image:
			'https://austinfoodmagazine.com/wp-content/uploads/2017/05/IMG_9599_edited-e1586371805142.jpg',
	},
	{
		name: 'Tacos A Go Go',
		address: '3704 Main St, Houston, TX 77002',
		// hours: [{"monday": }]
		phoneNumber: '713-807-8226',
		rating: [4],
		website: 'https://www.tacosagogo.com/',
		image:
			'https://cdn.vox-cdn.com/thumbor/veOoJE0Y4ilN8le3lbmTvBl9lwc=/0x0:750x560/1200x800/filters:focal(233x183:353x303)/cdn.vox-cdn.com/uploads/chorus_image/image/54213157/tacosagogo_fb.0.jpg',
	},
	{
		name: "Fuzzy's Taco Shop",
		address: '10275 B S Post Oak Rd, Houston, TX 77096',
		// hours: [{"monday": }]
		phoneNumber: '281-501-9917',
		rating: [3],
		website: 'https://www.fuzzystacoshop.com/locations/houston-tx-meyerland/',
		image:
			'https://www.foodbusinessnews.net/ext/resources/2019/6/FuzzysTacoShop_Lead.jpg?1561124906',
	},
	{
		name: 'Chilosos',
		address: '701 E 20th St, Houston, TX 77008',
		// hours: [{"monday": }]
		phoneNumber: '713-868-2273',
		rating: [5, 5, 5, 4],
		website: 'https://chilososhouston.com/',
		image:
			'https://chilososhouston.com/wp-content/uploads/2019/02/food-0379.jpg',
	},
	{
		name: 'La Calle Tacos',
		address: '909 Franklin St, Houston, TX 77002',
		// hours: [{"monday": }]
		phoneNumber: '832-735-8226',
		rating: [3],
		website: 'https://www.lacalletacos.com/',
		image:
			'https://www.gristleandgossip.com/wp-content/uploads/2019/06/La-Calle-Gristle-Gossip-5.jpg',
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

// db.Users.deleteMany({})
// 	.then(() => db.Users.collection.insertMany(messageSeed))
// 	.then((data) => {
// 		console.log(data.result.n + ' records inserted!');
// 		process.exit(0);
// 	})
// 	.catch((err) => {
// 		console.error(err);
// 		process.exit(1);
// 	});
