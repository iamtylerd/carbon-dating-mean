'use strict'

const mongoose = require('mongoose')

module.exports = mongoose.model('User', {
	userName: String,
	password: String,
	info: {
		customId: String,
		name: String,
		matches: [{type: String}],		
		seen: [String],
		interests: {0: String, 1: String, 2: String},
		about: String,
		email: String,
		gender: String,		
		genPref: String,
		picture: String,
	}	
})
