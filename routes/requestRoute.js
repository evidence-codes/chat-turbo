const router = require('express').Router()
const request = require('../controllers/request')

// routes

router.post('/', request)

module.exports = router