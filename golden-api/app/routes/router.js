const express = require("express")
const router = express.Router()

router.use('/dev', require('./api/devRoutes'))

router.use('/pub', require('./api/pubRoutes'))

router.use('/console', require('./api/consoleRoutes'))

router.use('/games', require('./api/gameRoutes'))

router.use('/app', require('./api/appRoutes'))

router.use('/review', require('./api/reviewRouts'))

router.use('/question', require('./api/questionRoutes'))

module.exports = router