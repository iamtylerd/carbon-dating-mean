"use strict"

const User = require('../models/user')

module.exports.getMatches = (req, res, err) => {
	// let magicNumber = Math.floor((Math.random() * 3) + 1)
	// console.log("magicNumber", magicNumber);
 //  User
 //    .find().limit(-1).skip(3)
 //    .then((users) => console.log("~~~~users", users))
 let idArray = req.session.user.info.seen
 console.log("req.session.user.info.seen", req.session.user.info.seen);
 User
 	.find({'info.customId' : 
			{ $nin: idArray
			}
	})
 	.then((users) => {
 		console.log("users", users );

 	})
}
