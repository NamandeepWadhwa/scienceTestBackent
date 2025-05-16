const express=require("express");
const router=express.Router();
const getUnReadMessages=require("./getUnredMessgae");
const authenticate = require("../../lib/tokens/authenticate");
const chatExist=require("./chatExist")
const sendMessage=require("./sendMessage")
const getMessages=require("./getMessages")
const createChat=require("./createChat")
const getUserChat=require("./getUserChat");
const getUserUnredChat=require("./getUserUnreadMessage");
const deleteUnredChat=require("./detelUnredMessage");
router.get("/getUnredMessages",authenticate,getUnReadMessages);
router.get("/chatExist",authenticate,chatExist);
router.post("/sendMessage",authenticate,sendMessage);
router.get("/getMessages",authenticate,getMessages);
router.post("/createChat",authenticate,createChat);
router.get("/getUserChat",authenticate,getUserChat);
router.get("/getUserUnredChat",authenticate,getUserUnredChat);
router.delete("/deleteUnredChat",authenticate,deleteUnredChat);


module.exports=router;