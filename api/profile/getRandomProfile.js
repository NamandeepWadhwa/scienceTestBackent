const getRandomProfile= require('../../lib/profile/getRandomProfile');
module.exports=async function (req,res){
  try{
    const userId=req.query.userId;
    if(!userId){
      return res.status(400).json({message:"UserId is required"});
    }
    const profile=await getRandomProfile(userId);
    if(!profile){
      return res.status(404).json({message:"Profile not found"});
    }
    return res.status(200).json({profile});
  }
  catch(err){
    
    return res.status(500).json({message:"Internal Server Error"});
  }
}