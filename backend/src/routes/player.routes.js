const express = require('express');
const router = express.Router();

require('../models/progression.model');
require('../models/player_stat.model');
const Players = require('../models/player.model');


router.get('/', async (req, res) => {
  const seniors = await Players.find( {juvenil: false} )
    .populate('progressions')
    .sort({total: -1, age: 1});
	res.json(seniors);
});

router.get('/juniors', async (req, res) => {
  const juniors = await Players.find( {juvenil: true} )
    .populate('progressions')
    .sort({total: -1, age: 1});
	res.json(juniors);
});

router.get('/:id', async (req, res) => {
  const player = await Players.findById(req.params.id)
    .populate('progressions').populate('stats');
  res.json(player);
});

module.exports = router;