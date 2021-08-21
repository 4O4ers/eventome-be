const express = require('express'); // require the express package
const app = express(); // initialize your express app instance
const cors = require('cors');
app.use(cors());
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/eventome', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;

connection.once('open', () => console.log('MongoDB connection established successfully'));
app.use(express.json());
const {
  getUser,
  addEvent,
  getEvents,
  deleteEvent,
  updateEvent,
  addUser,
  updateUser
} = require('./controller/event.controller');
const PORT = process.env.PORT;

//user methods
app.get('/user', getUser);
app.post('/user', addUser);
app.put('/user/:id', updateUser);
//app.delete('/user/:id', deleteUser);
// event methods
app.get('/event', getEvents);
app.post('/event', addEvent);
app.delete('/event/:id', deleteEvent);
app.put('/event/:id', updateEvent );

app.listen(PORT, () => {
  console.log(`working in port ${PORT}`);
});
