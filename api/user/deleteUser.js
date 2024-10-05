const deleteUser=require("../../lib/user/deleteUser")
module.exports=async(req,res)=>{
  try{
    const userId=req.user.id;
    await deleteUser(userId);
    return res.status(200).json({message:"user deleted"});

  }
  catch(err){
    console.log(err);
    return res.status(500).json({message:'user not found'});
  }
}