const getBlogComments=require("./getBlogComments");
const express=require("express");
const router=express.Router();

router.get("/getBloComments",getBlogComments);

module.exports=router;