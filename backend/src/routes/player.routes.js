const express = require('express');
const router = express.Router();

require('../models/progression.model');
const Players = require('../models/player.model');

router.get('/', async (req, res) => {
  const seniors = await Players.find( {juvenil: false} )
    .populate('progressions')
    .sort({total: -1, age: 1})
	res.json(seniors);
});

router.get('/juniors', async (req, res) => {
  const juniors = await Players.find( {juvenil: true} )
    .populate('progressions')
    .sort({total: -1, age: 1})
	res.json(juniors);
});

module.exports = router;