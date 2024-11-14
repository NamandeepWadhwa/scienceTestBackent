const sendOtp = require('./sendOtp');
const verifyOtp = require('./verifyOtp');
const express = require('express');
const router = express.Router();

router.post('/sendOtp', sendOtp);
router.post('/verifyOtp', verifyOtp);

module.exports = router;