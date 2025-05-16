const deleteUnredMessage=require("../../lib/messages/delteUnReadMessag");
module.exports=async (req,res)=>{
  try{
    const userId=req.user.id;
    const {chatId}=req.body;
    if(!chatId)
    {
      return res.status(400).json({message:"ChatId cannot be empty"});
    }
    await deleteUnredMessage(userId,chatId);
    return res.status(200).json({message:"message deleted"});
  }
  catch(err)
  {
    console.log(err);
    return res.status(500).json({message:"There was an error while deleting the message"});
  }
}