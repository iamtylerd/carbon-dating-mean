"use strict"

const User = require('../models/user')

module.exports.getMatches = (req, res, err) => {
  User
    .find()
    .then((users) => console.log("~~~~users", users))
}
