const express = require('express');
const router = express.Router();

const Profile = require('../models/profile.model');

router.get('/', async (req, res) => {
	const profile = await Profile.find()
	res.json(profile[0]);
});

module.exports = router;