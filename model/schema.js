"use strict";
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: String,
  name: String,
  picture: String,
  favorites: Array,
});

const userModel = mongoose.model("user", UserSchema);

const event = new mongoose.Schema({
  title: String,
  picture: String,
  description: String,
  time: String,
  location: String,
  favorites: Array,
  ratings: Array,
  attending: Array,
  category: Array,
  isPublic: Boolean,
  commnets: Array,
});
const eventModel = mongoose.model("event", event);
const seedEvent=()=>{
    const newEvent=new eventModel({
      title: 'adham',
  picture: 'adham',
  description: 'adham',
  time: 'adham',
  location:'adham',
  favorites: 'adham',
  ratings: 'adham',
  attending: 'adham',
  category: 'adham',
  isPublic: 'adham',
  commnets: 'adham'
    })
    newEvent.save();
    console.log(newEvent);
  }
  

module.exports = { userModel, eventModel ,seedEvent};

// {title,
//   picture,
//   description,
//   time,
//   location,
//   favorites,
//   ratings,
//   attending,
//   category,
//   isPublic,
//   commnets}