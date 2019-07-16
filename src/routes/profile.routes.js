const express = require('express');
const router = express.Router();

const Profile = require('../models/profile.model');

router.get('/', async (req, res) => {
	const profile = await Profile.find()
	console.log(profile[0])
	res.json(profile[0]);
});

module.exports = router;