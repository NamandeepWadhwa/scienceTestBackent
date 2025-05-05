const getUnreadMessages =require("../../lib/messages/getUnReadMessage");
module.exports=async(req,res)=>{
  try{
    const userId=req.user.id;
    if(!userId)return res.status(401).json({message:"Unauthorised"});
    const numberOfMessages=await getUnreadMessages(userId);
    return req.status(200).json(numberOfMessages);
  }
  catch(err)
  {
    return res.status(500).json({message:"Error occured"});
  }
}