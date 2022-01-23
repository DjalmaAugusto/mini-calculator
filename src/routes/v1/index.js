const express = require("express")
const health = require('express-healthcheck')

const { Operation: operationRoutes } = require('./basic')
const { Operation: validationRoutes } = require('./validation')
const apiDocsRoute = require('./docs/apiDocs')

const router = express.Router()

router.use('/health', health())
router.use('/docs', apiDocsRoute)
router.use('/validation', validationRoutes)
router.use('/operations', operationRoutes)

module.exports = router