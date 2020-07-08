const express = require('express');

const ItemCtrl = require('../controllers');

const router = express.Router();

router.get('/items', ItemCtrl.getAllItems);

module.exports = router;
