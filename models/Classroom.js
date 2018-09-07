let mongoose = require('mongoose');

let classroomSchema = new mongoose.Schema({
  className: { type: String },
  by: { type: String, required: true },
  byName: { type: String, required: true },
  scope: { type: String, default: 'all' }
}, {
    timestamps: true
  });

module.exports = mongoose.model('Classroom', classroomSchema);
