
const getUserChat=require("../../lib/messages/getUserChat");

module.exports=async (req,res)=>{
  try{
    const userId=req.user.id;
    const chat=await getUserChat(userId);
    const exclude=userId;
   const data=chat.map((chat)=>{
    const participant = chat.participants.filter((participant) => participant.id !== exclude);
    return {
      chatId:chat.id,
      participant:participant[0].id
    }
   })
    return res.status(200).json(data);
  }
  catch(err)
  {
    console.log(err);
    return res.status(500).json({message:"There was an error while finding the chat"});
  }
}