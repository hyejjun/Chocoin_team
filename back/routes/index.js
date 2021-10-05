const express = require('express');
const router = express.Router();
const userRouter = require('./user/index.js');
const coinRouter = require('./coin/index.js');
const mainController = require('./main');
const auth = require('../middleware/auth');

router.get('/index',(req,res)=>{
    res.send('가나?')
})
router.get('/',auth,mainController.main);
router.use('/user',userRouter)
router.use('/coin',coinRouter)


module.exports = router