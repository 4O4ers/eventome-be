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
  updateUser,
  updateEventFavorites,
  updateEventRatings,
  updateEventAttending,
  updateEventCategory,
  updateEventComments,
  updateUserFavorites,
  updateUserCreated,
  updateUserRatings,
  updateUserAttending,
  getOneUser,
  getOnSearch
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

app.put('/event/favorites/:id', updateEventFavorites);
app.put('/event/ratings/:id', updateEventRatings);
app.put('/event/attending/:id', updateEventAttending);
app.put('/event/category/:id', updateEventCategory);
app.put('/event/comments/:id', updateEventComments);


app.put('/user/favorites/:id', updateUserFavorites);
app.put('/user/created/:id', updateUserCreated);
app.put('/user/ratings/:id', updateUserRatings);
app.put('/user/attending/:email', updateUserAttending);
app.get('/user/one/:id', getOneUser)

app.get('/event/search', getOnSearch)
app.listen(PORT, () => {
  console.log(`working in port ${PORT}`);
});
