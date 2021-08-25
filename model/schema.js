"use strict";
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, default: 'no email' },
  name: { type: String, default: 'no name' },
  picture: { type: String, default: 'https://picsum.photos/200' },
  favorites: [String],
  created: [String],
  ratings: [{id: String, rating: Number}],
  attending: [String],

});

const userModel = mongoose.model("user", UserSchema);

const event = new mongoose.Schema({
  title: { type: String, default: 'no title' },
  picture: { type: String, default: 'https://picsum.photos/200/300' },
  description: { type: String, default: 'no description provided' },
  time: { type: Array, default: ['00:00:00', '00-00-00'] },
  date: {type: String, default: '00-00-0000'},
  address: { type: Object, default: {lat: 0, lng: 0} },
  // lat: {type: Number, default: 35 },
  // lng : {type: Number, default: 35 },
  favorites: [String],
  ratings: [{email: String, rating: Number}],
  attending: [String],
  categories: [String],
  isPublic: { type: Boolean, default: true },
  comments: [{email: String, comment: String}],
  creator: String,
  showHeart: {type : Boolean, default: true},
  showStar: {type : Boolean, default: true},
  showUpdateEvent : {type : Boolean, default: false},
  showDeleteEvent : {type : Boolean, default: false},
  showDetailsEvent: {type : Boolean, default: true},
});

const eventModel = mongoose.model("event", event);

module.exports = { userModel, eventModel };
