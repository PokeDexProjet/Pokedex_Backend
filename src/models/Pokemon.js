const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true }, // 唯一的 ID
  name: { type: String, required: true },
  type: { type: [String], required: true },
  image: { type: String, required: true }, // 图片 URL
  description: { type: String, required: true }, // 描述
});

module.exports = mongoose.model('Pokemon', PokemonSchema);
