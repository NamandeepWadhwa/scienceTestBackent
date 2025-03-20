const createBlog=require('./createBlogApi');
const router=require('express').Router();
const authenticate = require("../../lib/tokens/authenticate");
const getAllBlogs=require("./getBlogs")
const populateDatabse=require("./populateDatabs");

router.post('/createBlog',authenticate,createBlog);
router.get('/getBlogs',getAllBlogs);
router.get('/populateDatabase',populateDatabse);


module.exports=router;