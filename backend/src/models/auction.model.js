const mongoose = require('mongoose');
const { Schema } = mongoose;

const AuctionSchema = new Schema({
    id_player: { type: Number, required: true },
    position: { type: String, required: true },
    age: { type: Number, required: true },
    average: { type: Number, required: true },
    date_auction: { type: Number, required: true },
    offer: { type: Number, required: true }
});

module.exports = mongoose.model('Auction', AuctionSchema);