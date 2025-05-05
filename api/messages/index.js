const express=require("express");
const router=express.router();
const getUnReadMessages=require("./getUnredMessgae");
const authenticate = require("../../lib/tokens/authenticate");

router.get("getUnredMessages",authenticate,getUnReadMessages);

module.exports=router;