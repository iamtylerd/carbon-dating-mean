"use strict"

const { Router } = require('express')
const router = Router()

const matchesCtrl = require('../controllers/matchesCtrl')
// when a post happens on /api/login, fire the imported loginCtrl.userLogin
router.get('/api/matches', matchesCtrl.getMatches)

module.exports = router
