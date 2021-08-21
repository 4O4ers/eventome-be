"use strict";
//const { response } = require("express");
const { userModel, eventModel, seedEvent } = require("../model/schema");


const getUser = (req, res) => {
  userModel.find({}, (err, result) => {
    if (err) {
      res.status(404).send("Ooops")
    } else {
      res.send(result);
    }
  })
};


const addUser = (req, res) => {
  let bodyData = req.body;
  let user = new userModel({ ...bodyData });
  user.save().then(val => {
    userModel.find({}, (err, result) => {
      if (err) {
        res.status(404).send("Ooops")
      } else {
        res.send(result);
      }
    })
  })
    .catch(err => console.log(err));

};

const updateUser = (req, res) => {
  let id = req.params.id;
  let body = req.body;
  userModel.findByIdAndUpdate({ _id: id }, { ...body }, (err, response) => {
    if (err) {
      res.send(err);

    } else {
      userModel.find({}, (err, result) => {
        if (err) {
          res.status(404).send("Ooops")
        } else {
          console.log(result)
          res.send(result)
        }
      })
    }
  })
}
///////////////////////////////////////////// event methods /////////////////////////////////////////////
const addEvent = (req, res) => {
  let bodyData = req.body;
  let event = new eventModel({ ...bodyData });
  event.save();
  res.send(event); //sends the last one added 
};
const getEvents = (req, res) => {
  eventModel.find({}, (err, result) => {
    if (err) {
      res.status(404).send("Ooops")
    } else {
      console.log(result)
      res.send(result)
    }
  })

}

const deleteEvent = (req, res) => {

  eventModel.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      res.send("err");
    } else {

      eventModel.find({}, (err, result) => {
        if (err) {
          res.status(404).send("Ooops")
        } else {
          console.log(result)
          res.send(result)
        }
      })
    }
  });
};

const updateEvent = (req, res) => {
  let id = req.params.id;
  let body = req.body;
  eventModel.findByIdAndUpdate({ _id: id }, { ...body }, (err, response) => {
    if (err) {
      res.send(err);

    } else {
      eventModel.find({}, (err, result) => {
        if (err) {
          res.status(404).send("Ooops")
        } else {
          console.log(result)
          res.send(result)
        }
      })
    }
  })
}

module.exports = { getUser, addEvent, addUser, getEvents, deleteEvent, updateEvent, updateUser };
