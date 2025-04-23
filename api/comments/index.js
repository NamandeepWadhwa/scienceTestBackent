const getBlogComments=require("./getBlogComments");
const authenticate = require("../../lib/tokens/authenticate");
const addComment=require("./addingComment");
const userComments=require("./getuserComment");
const delteUserComment=require("./delteUserComment")
const express=require("express");
const router=express.Router();


router.get("/getBloComments",getBlogComments);
router.post("/addComment", authenticate, addComment);
router.get("/getUserComments",authenticate,userComments);
router.delete("/deleteUserComment",authenticate,delteUserComment);

module.exports=router;