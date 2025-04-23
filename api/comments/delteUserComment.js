const delteUser=require("../../lib/comments/deleteUserComment")
module.exports=async(req , res)=>{
  try{
    const userId=req.user.id;
    const {commnetId}=req.query;
    if(!userId || !commnetId)return res.status(400).json({message:"UserId or commnetId missing"});
    const success=await delteUser(userId,commnetId);
    if(success)return res.status(200).json({message:"Delte successfullly"});
    return res
      .status(401)
      .json({ message: "Unauthorized action or blog not found" });

  }
  catch(err)
  {
    return res.status(500).json({message:"Some internal error"});
  }
}