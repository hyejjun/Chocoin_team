const express = require('express');
const router = express.Router();
const userRouter = require('./user/index.js');
const coinRouter = require('./coin/index.js');
const mainRouter = require('./main/index')

router.get('/index',(req,res)=>{
    res.send('가나?')
})
router.use('/user',userRouter)
router.use('/coin',coinRouter)
router.use('/',mainRouter);

module.exports = router