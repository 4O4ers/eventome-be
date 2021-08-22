"use strict";
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, default: 'no email' },
  name: { type: String, default: 'no name' },
  picture: { type: String, default: '' },
  favorites: Array,
  created: Array,
  ratings: Array,
  attending: Array,

});

const userModel = mongoose.model("user", UserSchema);

const event = new mongoose.Schema({
  title: { type: String, default: 'no title' },
  picture: { type: String, default: '' },
  description: { type: String, default: 'no description provided' },
  time: { type: Array, default: ['00:00:00', '00-00-00'] },
  address: { type: Object, default: {lat: 0, lng: 0} },
  favorites: { type: String, default: '' },
  ratings: { type: Array, default: [] },//array of objects consisting of the user id who has rated, and the rating out of 10 [{_id: 45441535413541354, rating: 8}]
  attending: Array,
  category: Array,
  isPublic: { type: Boolean, default: true },
  commnets: Array,
  
});

const eventModel = mongoose.model("event", event);

module.exports = { userModel, eventModel };
