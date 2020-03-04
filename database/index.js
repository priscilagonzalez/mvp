const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

const db = mongoose.connection;

let mongooseConnection = 'mongodb://localhost/mvp';

mongoose
  .connect(mongooseConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection error: ', err));

  module.exports = {
    db
  };