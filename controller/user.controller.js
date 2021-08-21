"use strict";
const {userModel,favoritesEventModel} = require("../model/schema");

const getUser = (req, res) => {
  res.send("Hello World");
};

const postUser = (req, res) => {
  let data = new userModel({
    email: req.body.email,
    name: req.body.userName,
    picture: req.body.picture,
    favorites: [],
  });
  data.save();
  res.send(data);
};
const eventHander = (req, res) => {
  let dataEvent = new favoritesEventModel({
    title: req.body.title,
    picture: req.body.picture,
    description: req.body.description,
    time: req.body.time,
    location: req.body.location,
    favorites: [],
    ratings: [],
  });
};

module.exports = { getUser, eventHander ,postUser };
