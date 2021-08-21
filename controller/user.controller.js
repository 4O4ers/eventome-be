"use strict";
const {userModel,eventModel,seedEvent} = require("../model/schema");

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
  let dataEvent = new eventModel({
    title: req.body.title,
    picture: req.body.picture,
    description: req.body.description,
    time: req.body.time,
    location: req.body.location,
    favorites: [],
    ratings: [],
  });
  dataEvent.save()
  res.send(data)
};
const getEvents=(req,res)=>{
  seedEvent();
  eventModel.find({},(err,result)=>{
    if(err){
      res.status(404).send("Ooops")
    }else{
      console.log(result)
      res.send(result)
    }
  })
  
}
  
module.exports = { getUser, eventHander ,postUser,getEvents };
