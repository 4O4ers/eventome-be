"use strict";
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: String,
  name: String,
  picture: String,
  favorites: Array,
});

const userModel = mongoose.model("user", UserSchema);

const favoritesEvent = new mongoose.Schema({
  title: String,
  picture: String,
  description: String,
  time: String,
  location: String,
  favorites:Array,
  ratings:Array,
  
});
const favoritesEventModel = mongoose.model("favarotEvent",favoritesEvent );

module.exports = { userModel, favoritesEventModel };
