"use strict"

const User = require('../models/user')

module.exports.userLogin = (req, res, err) => {
  User.findOne({username: req.body.username})
    .then((user) => {
      if (user) {
        if (user.password === req.body.password) {
          res.json(user)
        } else {
          console.log("passwords didn't match");
        }  
      } else {
        console.log("user doesn't exist");
      }
    })
  } 
