const express = require('express');
const router = express.Router();

const Roster = require('../models/player.model');
const Attribute = require('../models/attribute.model');

router.get('/', async (req, res) => {
	const seniors = await Roster.find(
		{team_id: req.header('team_id'), juvenil: false}
	).populate('_attribute')
	res.json(seniors);
});

module.exports = router;