const mongoose = require('mongoose');

const apparelSchema = new mongoose.Schema({
  type: { type: String, required: true },
  condition: { type: String, required: true },
  action: { type: String, required: true },
  user: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Apparel = mongoose.model('Apparel', apparelSchema);

module.exports = Apparel;
