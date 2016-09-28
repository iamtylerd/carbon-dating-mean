"use strict"

const User = require('../models/user')

module.exports.userLogout = (req, res) => {
  req.session.destroy(err => {
    if (err) throw err
    res.redirect('/')  
  })
}
