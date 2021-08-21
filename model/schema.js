'use strict';
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email:String,
    name: String,
    picture:String,
    favorites:Array,
});
 
const userModel = mongoose.model('user', UserSchema);

module.exports=userModel


