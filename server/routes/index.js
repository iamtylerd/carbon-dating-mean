'use strict'

const { Router } = require('express')
const router = Router()

router.use(require('./loginRoute'))
router.use(require('./logoutRoute'))


module.exports = router
