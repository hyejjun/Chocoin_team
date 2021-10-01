const express = require('express')
const router = express.Router()
const coinController = require('./coincontroller.js')

//   /coin/
router.post('/order',coinController.get_orderdata)


module.exports = router