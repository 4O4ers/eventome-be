'use strict';
const userModel = require('../model/schema')

const getUser = (req, res) => {
    res.send('Hello World')
}

const postUser = (req, res) => {

    let data = new userModel({
        email: req.body.email,
        name: req.body.userName,
        picture: req.body.picture,
        favorites: []
    })
    data.save()
    res.send(data)
}

module.exports = { getUser, postUser }

