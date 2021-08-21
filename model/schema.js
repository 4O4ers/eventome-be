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
  time: { type: String, default: '00-00-00T00:00:00' },
  location: { type: String, default: 'no location provided' },
  favorites: Array,
  ratings: Array,
  attending: Array,
  category: Array,
  isPublic: { type: Boolean, default: true },
  commnets: Array,
});

const eventModel = mongoose.model("event", event);

module.exports = { userModel, eventModel };
