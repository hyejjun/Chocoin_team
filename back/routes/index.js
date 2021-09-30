const express = require('express')
const router = express.Router()
const userRouter = require('./user/index.js')
const coinRouter = require('./coin/index.js')

router.get('/user',userRouter)
router.get('/coin',coinRouter)


module.exports = router