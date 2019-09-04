const mongoose = require('mongoose');

const SeasonSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  season: { type: Number, required: true },
	init_day: { type: Number, required: true },
  end_day: { type: Number, required: true }
});

module.exports = mongoose.model('Season', SeasonSchema);