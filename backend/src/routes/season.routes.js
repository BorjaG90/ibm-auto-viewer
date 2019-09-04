const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Season = require('../models/season.model');

router.get('/', async (req, res) => {
  const season_data = await Season.find({});
  res.json(season_data);
});

router.get('/:season', async (req, res) => {
  console.log(req.params.season)
  const season_data = await Season.findOne({"season": req.params.season});
  res.json(season_data);
});



module.exports = router;