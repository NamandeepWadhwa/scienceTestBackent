const createBlog=require('./createBlogApi');
const router=require('express').Router();
const authenticate = require("../../lib/tokens/authenticate");
const getAllBlogs=require("./getBlogs")
const populateDatabse=require("./populateDatabs");
const getUserBlogs=require("./getUserBlogs");
const getBlogInfo=require("./getBlogInfo");

router.post('/createBlog',authenticate,createBlog);
router.get('/getBlogs',getAllBlogs);
router.get('/populateDatabase',populateDatabse);
router.get('/getUserBlogs',authenticate,getUserBlogs);
router.get('/getBlogInfo',getBlogInfo);


module.exports=router;