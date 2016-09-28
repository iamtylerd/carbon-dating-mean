"use strict"

const { Router } = require('express')
const router = Router()

const loginCtrl = require('../controllers/loginCtrl')
// when a post happens on /api/login, fire the imported loginCtrl.userLogin
router.post('/api/login', loginCtrl.userLogin)

module.exports = router
