const mongoose = require('mongoose');
const { Schema } = mongoose;

const PlayerSchema = new Schema({
    id_player: { type: Number, required: true }
});

module.exports = mongoose.model('Player', PlayerSchema);