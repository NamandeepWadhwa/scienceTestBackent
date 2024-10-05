const authenticate = require('../../lib/tokens/authenticate');
const createUser=require('./createUser');
const express = require('express');
const router = express.Router();
const createAuthUser=require('./createAuthUser');
const deleteUser=require('./deleteUser')

router.post('/createUser',createUser);
router.post('/createAuthUser',createAuthUser);
router.delete('/deleteUser',authenticate,deleteUser);

module.exports=router;