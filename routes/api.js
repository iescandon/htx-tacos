const router = require('express').Router();
const db = require('../models');
// const path = require('path');

router.get('/api/tacos', (req, res) => {
	db.Restaurants.find({})
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

router.put('/api/tacos/:id', (req, res) => {
	db.Restaurants.updateOne(
		{ _id: req.params.id },
		{ $push: { rating: req.body.rating } }
	)
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

module.exports = router;
