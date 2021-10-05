const express = require('express');
const router = express.Router();
const userController = require('./usercontroller.js');

router.get('/join',userController.join_get);
router.post('/join',userController.join_post);
router.post('/id_check',userController.id_check);

router.get('/login',userController.login_get);
router.post('/login',userController.login_post);
router.post('/logout',userController.logout);

router.get('/mypage',userController.mypage_get);
router.post('/mypage',userController.mypage_post);

module.exports = router;