'use strict'

const { Router } = require('express')
const router = Router()

router.use(require('./loginRoute'))
router.use(require('./registerRoute'))
router.use(require('./profileRoute'))
router.use(require('./matchesRoute'))

module.exports = router
