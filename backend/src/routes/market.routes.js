const express = require('express');
const router = express.Router();

const Market = require('../models/auction.model');

router.get('/', async (req, res) => {
	const auctions = await Market.find()
	res.json(auctions);
});

module.exports = router;