"use strict"

const User = require('../models/user')

module.exports.userRegister = (req, res, err) => {
  User.findOne({username: req.body})
    .then(userObj => {
      if (userObj) {
        console.log("EXISTZ")
      } else {
        User.create({
          userName: req.body.userName,
          password: req.body.password,
          info: {
            customId: req.body.info.customId,
            name: req.body.info.name,
            interests: req.body.info.interests,
            about: req.body.info.about,
            email: req.body.info.email,
            gender: req.body.info.gender,
            genPref: req.body.info.genPref,
            picture: req.body.info.picture
          }
        })
          .then(() => {
            // User.picture
            res.redirect('/')})
          .catch(err)  
      }
    }
)}
