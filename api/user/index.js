const authenticate = require('../../lib/tokens/authenticate');

const express = require('express');
const router = express.Router();

const deleteUser=require('./deleteUser')
const getUser=require('./getUser')
const createUser=require('./createUser')

const getTestUser=require('./getTestUser')
const canSendMessage=require("./canSendMessage");
const verifyExistingUser=require("./verifyUser")

router.post('/createUser',createUser);

router.delete('/deleteUser',authenticate,deleteUser);
router.post('/getUser',getUser)

router.post('/getTestUser',getTestUser)
router.get("/canSendMessage",authenticate,canSendMessage);
router.get('/verifyUser',verifyExistingUser);

module.exports=router;