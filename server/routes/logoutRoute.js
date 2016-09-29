"use strict"

const { Router } = require('express')
const router = Router()

const logoutCtrl = require('../controllers/logoutCtrl')
router.post('/api/logout', logoutCtrl.userLogout)

module.exports = router
