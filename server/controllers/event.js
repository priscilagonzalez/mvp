const Event = require('../../database/models/event.js');
const db = require('../../database/index.js');

const createEvent = (event, callback) => {
  Event.create(event, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      callback(null, data);
    }
  });
};

const getEvents = (userId, callback) => {
  Event.find({userId: userId}, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      callback(null, data);
    }
  });
};

const deleteEvent = (eventId, callback) => {
  Event.deleteOne(eventId, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      callback(null, data);
    }
  });
};

module.exports = { createEvent, getEvents, deleteEvent };
