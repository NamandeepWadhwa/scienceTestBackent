const getUserUnreadMesssage=require("../../lib/messages/getUserUnredChat");
module.exports=async (req,res)=>{
  try{
    const userId=req.user.id;
    const chat=await getUserUnreadMesssage(userId);
    return res.status(200).json(chat);
  }
  catch(err)
  {
    console.log(err);
    return res.status(500).json({message:"There was an error while finding the chat"});
  }
}