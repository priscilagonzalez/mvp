const mongoose = require('mongoose');

/* Need to add auto-increment*/
const UserSchema = new mongoose.Schema({
  id: {type: Number, required: true},
  email: {type: String, unique: true, required: true, minlength: 3},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  avatar: {type: String, default: "https://img.icons8.com/cotton/64/000000/gender-neutral-user--v1.png"},
});

const User = mongoose.model('User', UserSchema);

module.exports = User;