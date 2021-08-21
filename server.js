const express = require("express"); // require the express package
const app = express(); // initialize your express app instance
const cors = require("cors");
app.use(cors());
require("dotenv").config();
const mongoose = require("mongoose");



mongoose.connect("mongodb://localhost:27017/eventome", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(express.json());
const {
  getUser,
  postUser,
  eventHander,
  getEvents,
} = require("./controller/user.controller");
const PORT = process.env.PORT;

// a server endpoint
app.get("/get", getUser);
app.post("/post-user", postUser);
app.post("/event", eventHander);
app.get("/event", getEvents);
//
app.listen(PORT, () => {
  console.log(`working in port ${PORT}`);
});
