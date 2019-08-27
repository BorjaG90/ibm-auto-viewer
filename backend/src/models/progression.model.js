const mongoose = require('mongoose');

const ProgressionSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  /* player_id: { type: mongoose.Schema.Types.ObjectId, 
    ref: 'Player', 
    required: true },*/
	power: { type: Number, required: true },
	ambition: { type: Number, required: true },
	leadership: { type: Number, required: true },
	loyalty: { type: Number },
	exp: { type: Number, required: true },
	speed: { type: Number, required: true },
	jump: { type: Number, required: true },
	endurance: { type: Number, required: true },
	level: { type: Number, required: true },
	marking: { type: Number, required: true },
	rebound: { type: Number, required: true },
	block: { type: Number, required: true },
	recover: { type: Number, required: true },
	two: { type: Number, required: true },
	three: { type: Number, required: true },
	free: { type: Number, required: true },
	assist: { type: Number, required: true },
	dribbling: { type: Number, required: true },
	dunk: { type: Number, required: true },
	fight: { type: Number, required: true },
	mental: { type: Number, required: true },
	physic: { type: Number, required: true },
	defense: { type: Number, required: true },
	offense: { type: Number, required: true },
	total: { type: Number, required: true },
	_date: { type: Date, required:true }
});

module.exports = mongoose.model('Progression', ProgressionSchema);