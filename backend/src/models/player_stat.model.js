const mongoose = require('mongoose');

const PlayerStatSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  numeric_day: { type: Number, required: true },
  game_type: { type: String, required: true },
  game_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  team_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  player_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  points: { type: Number, required: true },
  t2i: { type: Number, required: true },
  t2c: { type: Number, required: true },
  t3i: { type: Number, required: true },
  t3c: { type: Number, required: true },
  tli: { type: Number, required: true },
  tlc: { type: Number, required: true },
  rebd: { type: Number, required: true },
  rebo: { type: Number, required: true },
  ass: { type: Number, required: true },
  ste: { type: Number, required: true },
  turn: { type: Number, required: true },
  blkf: { type: Number, required: true },
  blkc: { type: Number, required: true },
  foulr: { type: Number, required: true },
  foulc: { type: Number, required: true },
  min: { type: Number, required: true },
  val: { type: Number, required: true }
});

module.exports = mongoose.model('Player_Stat', PlayerStatSchema);
