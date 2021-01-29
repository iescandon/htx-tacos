const router = require('express').Router();
const db = require('../models');

router.get('/api/users', (req, res) => {
	db.Users.find({})
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

// router.put('/api/trails', (req, res) => {
// 	console.log(req.body);
// 	db.TrailSystem.update(
// 		{ _id: req.body.id },
// 		{ $set: { open: req.body.status, lastToggled: Date.now() } }
// 	)
// 		.then((data) => {
// 			res.json(data);
// 			console.log(data);
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 		});
// });

// router.put('/api/trails/:id', (req, res) => {
// 	console.log(req.params.id, req.body);
// 	db.TrailSystem.updateOne(
// 		{ _id: req.body.selectedTrail, 'trails.trailId': req.params.id },
// 		{
// 			$set: {
// 				'trails.$.condition': req.body.condition,
// 				'trails.$.lastUpdated': Date.now(),
// 			},
// 		}
// 	)
// 		.then((data) => {
// 			res.json(data);
// 			console.log(data);
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 		});
// });

// router.put('/api/trails/comments/:id', (req, res) => {
// 	console.log(req.body);
// 	db.TrailSystem.updateOne(
// 		{
// 			_id: req.body.selectedTrail,
// 			'trails.trailId': req.params.id,
// 		},
// 		{
// 			$set: {
// 				'trails.$.comment': req.body.trailComment.comment,
// 				'trails.$.commenter': req.body.trailComment.commenter,
// 				'trails.$.commentDate': Date.now(),
// 			},
// 		}
// 	)
// 		.then((data) => {
// 			res.json(data);
// 			console.log(data);
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 		});
// });

module.exports = router;
