const express = require('express');
const router = express.Router();

const Roster = require('../models/player.model');

router.get('/', async (req, res) => {
	const seniors = await Roster.find({team_id: req.header('team_id'), juvenil: false})
	res.json(seniors);
});

module.exports = router;