const request = require('../controllers/request')
const router = require('express').Router()

router.post('/', request)

module.exports = router