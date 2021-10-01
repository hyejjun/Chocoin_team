const express = require('express')
const router = express.Router()
const coinController = require('./coincontroller.js')

//   /coin/
router.get('/',coinController)


module.exports = router