const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    seniors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }],
    juniors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }]
});

module.exports = mongoose.model('Team', TeamSchema);