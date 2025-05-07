const express=require("express");
const router=express.Router();
const getUnReadMessages=require("./getUnredMessgae");
const authenticate = require("../../lib/tokens/authenticate");
const chatExist=require("./chatExist")

router.get("/getUnredMessages",authenticate,getUnReadMessages);
router.get("/chatExist",authenticate,chatExist);

module.exports=router;