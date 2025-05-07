const chatExist=require("../../lib/messages/chatExist");
module.exports=async (req,res)=>{
  try{
    const userId2=req.query.userId;
   
    const userId1=req.user.id;
    if(!userId2)return res.status(400).json({message:"Other user Id is required"});
    const chat=await chatExist(userId1,userId2);
    return res.status(200).json({isExist:chat});

  }
  catch(err)
  {
    console.log(err);
    return res.status(500).json({message:"There was some internal server error"});
  }
}