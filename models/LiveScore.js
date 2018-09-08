let mongoose = require('mongoose');

let liveScoreSchema = new mongoose.Schema({
  mendikbud: { type: Number, required: true },
  pupr: { type: Number, required: true },
  pertanian: { type: Number, required: true },
  bekraf: { type: Number, required: true },
  tenagaKerja: { type: Number, required: true },
  kominfo: { type: Number, required: true },
}, {
    timestamps: true
  });

module.exports = mongoose.model('LiveScore', liveScoreSchema);
