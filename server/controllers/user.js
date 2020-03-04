const User = require('../../database/models/user.js');
const db = require('../../database/index.js');

const createUser = (user, callback) => {

  const newUser = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    avatar: user.avatar,
  }

  User.create(newUser, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      callback(null, data);
    }
  });
};


const getUser = (userId, callback) => {
  User.findOne({id: userId}, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      callback(null, data);
    }
  });
};

module.exports = {
  createUser,
  getUser,
};
