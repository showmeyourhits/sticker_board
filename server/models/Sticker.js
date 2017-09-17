const mongoose = require('mongoose');

mongoose.Types.ObjectId();

const StickerSchema = new mongoose.Schema({
  text: String,
  color: String,
});

const Sticker = mongoose.model('Sticker', StickerSchema);

module.exports = Sticker;
