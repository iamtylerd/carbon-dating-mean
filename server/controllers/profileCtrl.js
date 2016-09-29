"use strict"

const User = require('../models/user')

module.exports.userInfo = (req, res) => {
  // console.log("~~~~app.locals.user",app.locals.user)
  console.log("PROFILE REQ", req);
  res.json(req.session.user)
}

module.exports.userMatches = (req, res) => {
  console.log("req.session",req.session)
  (res.json(req.session.user.info.matches))
}
