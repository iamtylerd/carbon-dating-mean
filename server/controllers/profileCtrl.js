"use strict"

const User = require('../models/user')

module.exports.userInfo = (req, res) => (res.json(req.session))


