let mongoose = require('mongoose');

let delegateSchema = new mongoose.Schema({
  userId: { type: String },
  name: { type: String },
  buddyNumber: { type: Number },
  tableNumber: { type: Number },
}, {
    timestamps: true
  });

module.exports = mongoose.model('Delegate', delegateSchema);
