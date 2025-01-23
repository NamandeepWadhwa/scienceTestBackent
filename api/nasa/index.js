const express=require('express');
const router=express.Router();
const astroNomical=require("./astronomicalPic");
const neo=require('./neo');
router.post("/nasaImage",astroNomical);
router.get("/getNeo",neo);
module.exports=router;
