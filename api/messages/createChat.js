const createChat=require("../../lib/messages/createChat")
module.exports=async (req,res)=>{
  try{
    const userId2=req.query.userId;
    const userId1=req.user.id;
    if(!userId2)return res.status(400).json({message:"Other user Id is required"});
    const chat=await createChat(userId1,userId2);
    if(!chat)return res.status(400).json({message:"Chat not created"});
    return res.status(200).json(chat);
  }
  catch(err){
    console.log(err);
    return res.status(500).json({message:"Error occured"});
  }
}