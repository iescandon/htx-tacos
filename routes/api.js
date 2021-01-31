const router = require('express').Router();
const db = require('../models');

router.get('/', (req, res) => {
	db.Users.find({})
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

router.get('/api/tacos', (req, res) => {
	db.Restaurants.find({})
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

module.exports = router;
