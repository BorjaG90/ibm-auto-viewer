const express = require('express');
const router = express.Router();

const Roster = require('../models/team.model');

// router.get('/', async (req, res) => {
// 	const seniors = await Roster.find(
// 		{team_id: req.header('team_id'), juvenil: false}
// 	).sort({total: -1, age: 1})
// 	res.json(seniors);
// });

router.get('/:id', async (req, res) => {
	const team = await Roster.findById(req.params.id)
		.populate('seniors').populate('juniors')
	res.json(team);
});


module.exports = router;