"use strict"

const User = require('../models/user')

module.exports.userInfo = (req, res) => (res.json(req.session))
module.exports.userMatches = (req, res) => {
  console.log("req.session",req.session)
  (res.json(req.session))
}
