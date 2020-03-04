const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  userId: {type: Number, required: true},
  title: String,
  start: String,
  end: String,
  notes: String,
  });

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;
