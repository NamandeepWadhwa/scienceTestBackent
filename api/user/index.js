const authenticate = require('../../lib/tokens/authenticate');
const createUser=require('./createUser');
const express = require('express');
const router = express.Router();
const createAuthUser=require('./createAuthUser');

router.post('/createUser',createUser);
router.post('/createAuthUser',createAuthUser);

module.exports=router;