'use strict'

const express = require('express')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const routes = require('../server/routes/')
const bodyParser = require('body-parser')
const { connect } = require('./database/database')

// Instantiate app
const app = express()
const port = process.env.PORT || 3000;
app.set('port', port)

// Middlewares
app.use(session({
	store: new RedisStore(),
	secret: 'carbondatemenow'
}))

app.use((req, res, next) => {
	app.locals.username = req.session.username
	next()
})
app.use(bodyParser.urlencoded({extended: false}))

// app.use(express.static('client'))
// app.use(json())

// routes
//app.use(routes)

//Listen
connect()
	.then(() =>
		app.listen(port, () => {
			console.log(`Listening on port: ${port}`)
 	}))
 	.catch(console.error)
