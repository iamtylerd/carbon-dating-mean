'use strict'

const { json } = require('body-parser')
const express = require('express')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const mongoose = require('mongoose')
// const bcrypt = require('bcrypt')
const routes = require('../server/routes/')
const { connect } = require('./database/database')

// Instantiate app
const app = express()
const port = process.env.PORT || 3000;
app.set('port', port)


// Middlewares
app.use(session({
	store: new RedisStore({
    url: process.env.REDIS_URL || "redis://localhost:6379"
  }),
	secret: 'carbondatemenow'
}))

app.use((req, res, next) => {
	app.locals.username = req.session && req.session.username
	next()
})


app.use(express.static('client'))
app.use(json())

// routes
app.use(routes)

//Listen
connect()
	.then(() =>
		app.listen(port, () => {
			console.log(`Listening on port: ${port}`)
 	}))
 	.catch(console.error)
