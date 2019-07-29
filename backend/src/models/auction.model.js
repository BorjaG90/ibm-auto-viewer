const mongoose = require('mongoose');
const { Schema } = mongoose;

const AuctionSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true },
    position: { type: String, required: true },
    age: { type: Number, required: true },
    average: { type: Number, required: true },
    date_auction: { type: Number, required: true },
    offer: { type: Number, required: true },
    player: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' }
});

module.exports = mongoose.model('Auction', AuctionSchema);