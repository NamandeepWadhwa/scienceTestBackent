const authenticate = require('../../lib/tokens/authenticate');
const createUser=require('./createUser');
const express = require('express');
const router = express.Router();
const test=require('./testingUser');
const createAuthUser=require('../../lib/user/createAuthUser');

router.post('/createUser',createUser);
router.get('/test',authenticate,test);
router.post('/createAuthUser',createAuthUser);

module.exports=router;