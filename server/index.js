const express = require('express');
const bodyParser = require('body-parser');
const User = require('./controllers/user.js');
const Event = require('./controllers/event.js');
const app = express();

app.use(express.static('client/public'));
app.use(bodyParser.json());

app.post('/api/event', (req, res) => {
  Event.createEvent(req.body, (err, data) => {
    if (err) {
      res.status(400).send({
        message: err.message,
      });
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/api/event/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  console.log(userId);
  Event.getEvents(userId, (err, data) => {
    if (err) {
      res.status(400).send({
        message: err.message,
      });
    } else {
      console.log("SERVIDOR EVENT", data);
      res.status(200).send(data);
    }
  });
});

app.get('/api/user/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  User.getUser(userId, (err, data) => {
    if (err) {
      res.status(400).send({
        message: err.message,
      });
    } else {
      res.status(200).send(data);
    }
  });
});

app.post('/api/user', (req, res) => {
  User.createUser(req.body, (err, data) => {
    if (err) {
      res.status(400).send({
        message: err.message,
      });
    } else {
      res.status(200).send(data);
    }
  });
});

app.delete('/api/event/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  console.log(req.body);
  Event.deleteEvent(req.body, (err, data) => {
    if (err) {
      res.status(400).send({
        message: err.message,
      });
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(3001, () => {
  console.log('Listening on port 3000');
});