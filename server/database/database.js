'use strict'

const mongoose = require('mongoose')
// const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/carbondata'
const MONGODB_URL = 'mongodb://homer:simpson@ds047146.mlab.com:47146/carbondata'

mongoose.Promise = Promise

module.exports.connect = () => mongoose.connect(MONGODB_URL)
