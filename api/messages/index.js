const express=require("express");
const router=express.Router();
const getUnReadMessages=require("./getUnredMessgae");
const authenticate = require("../../lib/tokens/authenticate");

router.get("/getUnredMessages",authenticate,getUnReadMessages);

module.exports=router;