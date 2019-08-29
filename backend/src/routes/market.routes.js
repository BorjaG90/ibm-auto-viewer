const express = require('express');
const router = express.Router();

const Market = require('../models/auction.model');

router.get('/', async (req, res) => {
	const auctions = await Market.find()
		.populate('player')
		.sort({average: -1,date_auction: 1})
	res.json(auctions);
});

router.get('/pointguard', async (req, res) => {
	const auctions = await Market.find({position: "B"})
		.populate('player')
		.sort({average: -1,date_auction: 1})
	res.json(auctions);
});

router.get('/shootingguard', async (req, res) => {
	const auctions = await Market.find({position: "E"})
		.populate('player')
		.sort({average: -1,date_auction: 1})
	res.json(auctions);
});

router.get('/smallforward', async (req, res) => {
	const auctions = await Market.find({position: "A"})
		.populate('player')
		.sort({average: -1,date_auction: 1})
	res.json(auctions);
});

router.get('/powerforward', async (req, res) => {
	const auctions = await Market.find({position: "AP"})
		.populate('player')
		.sort({average: -1,date_auction: 1})
	res.json(auctions);
});

router.get('/center', async (req, res) => {
	const auctions = await Market.find({position: "P"})
		.populate('player')
		.sort({average: -1,date_auction: 1})
	res.json(auctions);
});

module.exports = router;