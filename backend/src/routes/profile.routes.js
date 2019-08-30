const express = require('express');
const router = express.Router();

const Profile = require('../models/profile.model');

router.get('/', async (req, res) => {
	const profile = await Profile.find().populate('team_id')
	res.json(profile[0]);
});

module.exports = router;