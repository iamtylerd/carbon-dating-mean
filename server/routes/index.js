'use strict'

const { Router } = require('express')
const router = Router()

router.use(require('./loginRoute'))

module.exports = router
