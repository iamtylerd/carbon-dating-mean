"use strict"

const User = require('../models/user')

module.exports.userLogout = (req, res, err) => {
  console.log("Before", req.session)
  req.session.destroy(err => {
    if (err) throw err
  })
  console.log("After", req.session)
}
