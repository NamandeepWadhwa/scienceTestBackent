const getBlogComments=require("./getBlogComments");
const authenticate = require("../../lib/tokens/authenticate");
const addComment=require("./addingComment");
const express=require("express");
const router=express.Router();


router.get("/getBloComments",getBlogComments);
router.post("/addComment", authenticate, addComment);

module.exports=router;