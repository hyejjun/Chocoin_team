const express = require('express')
const router = express.Router()
const coinController = require('./coincontroller.js')

//   /coin/
//router.get('/info',coinController.coin_info)
router.get('/info',coinController.coin_info)
// router.get('/order',coinController.get_orderdata)

router.post('/order',coinController.get_orderdata)
router.get('/tradingview',coinController.tradingview)



module.exports = router