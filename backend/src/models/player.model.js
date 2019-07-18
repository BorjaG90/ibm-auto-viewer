const mongoose = require('mongoose');
const { Schema } = mongoose;

const PlayerSchema = new Schema({
    id_player: { type: Number, required: true },
    team_id: { type: Number, required: true },
    name: { type: String, required: true },
    position: { type: String, required: true },
    age: { type: Number, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    canon: { type: Number, required: true },
    salary: { type: Number, required: true },
    clause: { type: Number, required: true },
    years: { type: Number, required: true },
    juvenil: { type: Boolean, required: true },
    country: { type: String, required: true }
});

module.exports = mongoose.model('Player', PlayerSchema);