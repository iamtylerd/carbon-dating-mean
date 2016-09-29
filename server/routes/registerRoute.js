"use strict"

const { Router } = require('express')
const router = Router()

const registerCtrl = require('../controllers/registerCtrl')
router.post('/api/register', registerCtrl.userRegister)

module.exports = router