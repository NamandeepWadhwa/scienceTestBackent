const createBlog=require('./createBlogApi');
const router=require('express').Router();
const authenticate = require("../../lib/tokens/authenticate");
const getAllBlogs=require("./getBlogs")
const populateDatabse=require("./populateDatabs");
const getUserBlogs=require("./getUserBlogs");
const getBlogInfo=require("./getBlogInfo");
const getRandomUserBlogs=require("./getRandomUserBlogs");
const checkUpvotes=require("./checkUpvotes");
const chnageUpvotes=require("./chnageUpvotes")

router.post('/createBlog',authenticate,createBlog);
router.get('/getBlogs',getAllBlogs);
router.get('/populateDatabase',populateDatabse);
router.get('/getUserBlogs',authenticate,getUserBlogs);
router.get('/getBlogInfo',getBlogInfo);
router.get("/getRandomUserBlogs",getRandomUserBlogs);
router.get("/checkUpvote",authenticate,checkUpvotes);
router.post("/changeUpvotes",authenticate,chnageUpvotes);


module.exports=router;