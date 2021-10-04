const express = require('express');
const router = express.Router();
const userController = require('./usercontroller.js');

//   /user/
router.get('/join',userController.join_get);
router.post('/join_success',userController.join_post);

router.get('/login',userController.login_get);
router.get('/mypage',userController.mypage_get);

router.post('/logintry',userController.login_post);
router.post('/mypage',userController.mypage_post);

module.exports = router