const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProfileSchema = new Schema({
	user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
	username: { type: String, required: true },
	team_id: { type: mongoose.Schema.Types.ObjectId, 
		ref: 'Team', 
		required: true },
	team_name: { type: String, required: true },
	money: { type: Number, required: true },
	color_prim: { type: String, required: true },
	color_sec: { type: String, required: true },
	club_seats: { type: Number, required: true },
	fans: { type: Number, required: true },
	ranking_team: { type: Number, required: true },
	streak: { type: Number, required: true }
});

module.exports = mongoose.model('Profile', ProfileSchema);