"use strict";
//const { response } = require("express");
const { userModel, eventModel, seedEvent } = require("../model/schema");

const getAllUsers = (res) => {
  userModel.find({}, (err, result) => {
    if (err) {
      res.status(404).send("Ooops")
    } else {
      res.send(result);
    }
  })
}

const getUser = (req, res) => {
  getAllUsers(res);
};

const getOneUser = (email, res) => {
  userModel.find({ email: email }, (err, result) => {
    if (err) {
      res.status(404).send("Ooops")
    } else {
      res.send(result);
    }
  })
}
const addUser = (req, res) => {
  let bodyData = req.body;
  console.log(bodyData);
  let user = new userModel({ ...bodyData });
  user.save().then(val => {
    userModel.find({}, (err, result) => {
      if (err) {
        res.status(404).send("Ooops")
      } else {
        res.send(result);
      }
    })
  }).catch(err => console.log(err));
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

          res.send(result)
        }
      })
    }
  })
}

const updateUserFavorites = (req, res) => {
  let email = req.params.id;
  let body = req.body.favorites;
  userModel.updateOne(
    { email: email }, { $addToSet: { favorites: [...body] } },
    (err, result) => {
      if (err) { res.send(err) }
      else {
        getOneUser(email, res);
      }
    }
  )
}
const updateUserCreated = (req, res) => {
  let id = req.params.id;
  let body = req.body.created;
  userModel.updateOne(
    { _id: id }, { $addToSet: { created: [...body] } },
    (err, result) => {
      if (err) { res.send(err) }
      else {
        getAllUsers(res);
      }
    }
  )
}
const updateUserRatings = (req, res) => {
  let id = req.params.id;
  let body = req.body.ratings;
  userModel.updateOne(
    { _id: id }, { $addToSet: { ratings: [...body] } },
    (err, result) => {
      if (err) { res.send(err) }
      else {
        getAllUsers(res);
      }
    }
  )
}

const updateUserAttending = (req, res) => {
  let email = req.params.email;
  let body = req.body.attending;
  userModel.updateOne(
    { email: email }, { $addToSet: { attending: body } },
    (err, result) => {
      if (err) { res.send(err) }
      else {
        getAllUsers(res);
      }
    }
  )
}

///////////////////////////////////////////// event methods /////////////////////////////////////////////

// const oneEvent = (req, res) => {
//   let id = req.query.id;
// }
const getAllEvents = (res) => {
  eventModel.find({}, (err, result) => {
    if (err) {
      res.status(404).send("Ooops")
    } else {

      res.send(result)
    }
  })
}

const addEvent = (req, res) => {
  let bodyData = req.body;
  let event = new eventModel({ ...bodyData });
  event.save().then(val => {
    getAllEvents(res);
  })
    .catch(err => res.send(err));
};

const getEvents = (req, res) => {
  getAllEvents(res);

}

const deleteEvent = (req, res) => {

  eventModel.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      res.send("err");
    } else {
      getAllEvents(res);
    }
  });
};



const updateEvent = (req, res) => {
  let id = req.params.id;
  let body = req.body;
  console.log(body);
  eventModel.findByIdAndUpdate({ _id: id }, { ...body }, (err, response) => {
    if (err) {
      res.send(err);
    } else {
      getAllEvents(res);
    }
  })
}


//favorites / ratings / attending / category / Comments
const updateEventFavorites = (req, res) => {
  let id = req.params.id;
  let body = req.body.favorites;

  eventModel.updateOne(
    { _id: id }, { $addToSet: { favorites: body } },
    (err, result) => {
      if (err) { res.send(err) }
      else {
        getAllEvents(res);
      }
    }
  )
}
const updateEventRatings = (req, res) => {
  let id = req.params.id;
  let body = req.body.ratings;
  console.log(body);
  eventModel.updateOne(
    { _id: id }, { $addToSet: { ratings: body } },
    (err, result) => {
      if (err) { res.send(err) }
      else {
        getAllEvents(res);
      }
    }
  )
}
const updateEventAttending = (req, res) => {
  let id = req.params.id;
  let body = req.body.attending;
  console.log(id, '         ', body);
  eventModel.updateOne(
    { _id: id }, { $addToSet: { attending: body } },
    (err, result) => {
      if (err) { res.send(err) }
      else {
        getAllEvents(res);
      }
    }
  )
}

const updateEventCategory = (req, res) => {
  let id = req.params.id;
  let body = req.body.categories;
  console.log(body);
  eventModel.updateOne(
    { _id: id }, { $addToSet: { categories: body} },
    (err, result) => {
      if (err) { res.send(err) }
      else {
        getAllEvents(res);
      }
    }
  )
}

const updateEventComments = (req, res) => {
  let id = req.params.id;
  let body = req.body.comments;
  console.log(body);
  eventModel.updateOne(
    { _id: id }, { $addToSet: { comments: body } },
    (err, result) => {
      if (err) { res.send(err) }
      else {
        getAllEvents(res);
      }
    }
  )
}

const getOnSearch = (req, res) => {
  let q = req.query.q;
  eventModel.find({ title: q }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      if (result.length === 0) {
        eventModel.find({ description: q }, (err, result) => {
          if (err) {
            res.send(err);
          } else {
            res.send(result);
          }
        })
      } else {
        res.send(result);
      }

    }
  })
}
module.exports = { getUser, addEvent, addUser, getEvents, deleteEvent, updateEvent, updateUser, updateEventFavorites, updateEventRatings, updateEventAttending, updateEventCategory, updateEventComments, updateUserFavorites, updateUserCreated, updateUserRatings, updateUserAttending, getOneUser, getOnSearch };
