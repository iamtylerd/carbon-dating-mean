'use strict'

const mongoose = require('mongoose')

module.exports = mongoose.model('User', {
	username: String,
	password: String,
	info: {
		customId: String,
		name: String,
		matches: [String],		
		seen: [String],
		interests: [String],
		about: String,
		email: String,
		gender: String,		
		genPref: String,
		picture: String
	}	
})