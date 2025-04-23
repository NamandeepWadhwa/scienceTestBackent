const getBlogComments=require("./getBlogComments");
const authenticate = require("../../lib/tokens/authenticate");
const addComment=require("./addingComment");
const userComments=require("./getuserComment");
const express=require("express");
const router=express.Router();


router.get("/getBloComments",getBlogComments);
router.post("/addComment", authenticate, addComment);
router.get("/getUserComments",authenticate,userComments);

module.exports=router;