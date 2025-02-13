const createBlog=require('./createBlogApi');
const router=require('express').Router();
const authenticate = require("../../lib/tokens/authenticate");

router.post('/createBlog',authenticate,createBlog);

module.exports=router;