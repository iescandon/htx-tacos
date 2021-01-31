const router = require('express').Router();
const db = require('../models');

router.get('/api/tacos', (req, res) => {
	db.Restaurants.find({})
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

router.use((req, res) =>
	res.sendFile(path.join(__dirname, '../client/build/index.html'))
);

module.exports = router;
