const sendOtp = require('./sendOtp');
const verifyOtp = require('./verifyOtp');
const expressq = require('express');
const router = expressq.Router();

router.post('/sendOtp', sendOtp);
router.post('/verifyOtp', verifyOtp);

module.exports = router;