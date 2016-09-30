"use strict"

const User = require('../models/user')

module.exports.getMatches = (req, res, err) => {
  let idArray = req.session.user.info.seen
  let genPref;
  let gender = req.session.user.info.gender
  if (req.session.user.info.genPref === 'male') {
    genPref = 'male'
  } else if (req.session.user.info.genPref === 'female') {
    genPref = 'female'
  } else {
    genPref = { $in: ['male', 'female'] }
  }


 User
  .where('info.gender').equals(genPref)
  .where('info.genPref').in([gender, 'other'])
  .where('info.customId').nin(idArray)
 	.then((users) => {
 		console.log("users", users);
 	})
}
