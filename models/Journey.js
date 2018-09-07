let mongoose = require('mongoose');

let journeySchema = new mongoose.Schema({
  session: { type: String },
  rate: { type: Number },
  content: { type: String, required: true },
  by: { type: String, required: true },
  byName: { type: String, required: true },
  scope: { type: String, default: 'all' }
}, {
    timestamps: true
  });

module.exports = mongoose.model('Journey', journeySchema);
