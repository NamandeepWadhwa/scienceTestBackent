const deleteProflie=require('../../lib/profile/deleteProfile')
module.exports=async (req,res)=>{
  try{
    const userId=req.user.id;
    await deleteProflie(userId);
    return res.status(200).json({message:"profile deleted"})

  }
  catch(err){
    console.log(err)
    return res.status(500).json({message:"message deleted"})
  }
}