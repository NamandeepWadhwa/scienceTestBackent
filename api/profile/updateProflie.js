const updateProfileFunction=require('../../lib/profile/updateProfile');
module.exports=async(req,res)=>{
  try{
  
  const userId=req.user.id;
  const {name,imageUrl}=req.body;
  if(!name && !imageUrl){
    return res.status(400).json({message:"Please provide at least one field to update"});
  }
  
  
  const updateProfile=await updateProfileFunction(userId,name,imageUrl);
  const responseData={
    userProfile:updateProfile,
    message:"Profile updated successfully"
  }
  return res.status(200).json({responseData});
}
  catch(err){
    console.log(err);
    return res.status(500).json({message:"Internal Server Error"});
  }

};