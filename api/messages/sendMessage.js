const sendMessage=require("../../lib/messages/createMessage");
module.exports=async(req,res)=>{
  try{
    const {message,chatId}=req.body;
    const userId=req.user.id;
    if(!message || !chatId)return res.status(400).json({message:"Bad Request"});
    const messageData=await sendMessage(userId,chatId,message);
    return res.status(200).json(messageData);
  }
  catch(err)
  {
    console.log(err);
    return res.status(500).json({message:"Error occured"});
  }
 
}