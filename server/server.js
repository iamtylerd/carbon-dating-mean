'use strict'

const express = require('express')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const routes = require('../server/routes/')
const { json } = require('body-parser')
//const { connect } = require('./db/database')
const app = express()


const port = process.env.PORT || 3000;
// const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/meantodo'
app.set('port', port)

// app.use(express.static('client'))
// app.use(json())

// // routes
// app.use(routes)

// //Listen
// mongoose.Promise = Promise
// mongoose.connect(MONGODB_URL, () =>
app.listen(port, () => console.log(`Listening on port: ${port}`))
// 	)
