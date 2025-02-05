const authenticate = require('../../lib/tokens/authenticate');
const createUser=require('./createUser');
const express = require('express');
const router = express.Router();
const createAuthUser=require('./createAuthUser');
const deleteUser=require('./deleteUser')
const getUser=require('./getUser')
const getAuthUser=require('./getAuthUser')
const getTestUser=require('./getTestUser')

router.post('/createUser',createUser);
router.post('/createAuthUser',createAuthUser);
router.delete('/deleteUser',authenticate,deleteUser);
router.post('/getUser',getUser)
router.post('/getAuthUser',getAuthUser)
router.post('/getTestUser',getTestUser)

module.exports=router;