const express=require('express');
const router=express.Router();
const astroNomical=require("./astronomicalPic");
router.post("/nasaImage",astroNomical);
module.exports=router;
