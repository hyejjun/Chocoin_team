const express = require('express');
const router = express.Router();
const controller = require('./controller');
const auth = require('../../middleware/auth');

router.get('/logined',controller.main);
router.get('/',controller.first_main);

module.exports = router;