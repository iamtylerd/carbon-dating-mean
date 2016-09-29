"use strict"

const { Router } = require('express')
const router = Router()

const profileCtrl = require('../controllers/profileCtrl')
// when a post happens on /api/login, fire the imported loginCtrl.userLogin
router.get('/api/profile', profileCtrl.userInfo)

router.get('/api/profile/matches', profileCtrl.userMatches)

module.exports = router
