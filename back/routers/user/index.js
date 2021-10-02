const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/join',controller.join_success);

module.exports = router;