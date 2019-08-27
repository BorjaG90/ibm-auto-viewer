const express = require('express');
const router = express.Router();

const Roster = require('../models/team.model');

// router.get('/', async (req, res) => {
// 	const seniors = await Roster.find(
// 		{team_id: req.header('team_id'), juvenil: false}
// 	).sort({total: -1, age: 1})
// 	res.json(seniors);
// });

router.get('/', async (req, res) => {
	const seniors = await Roster.find( {_id: req.header('team_id')} )
		.populate('seniors')
		.sort({total: -1, age: 1})
	res.json(seniors);
});

router.get('/juniors', async (req, res) => {
	const juniors = await Roster.find( {_id: req.header('team_id')} )
		.populate('juniors')
		.sort({total: -1, age: 1})
	res.json(juniors);
});

module.exports = router;