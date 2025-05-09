const getMessages=require("../../lib/messages/getMessages");
module.exports=async(req,res)=>{
  try{
    const cursorId=req.query.cursorId;
    const chatId=req.query.chatId;
    const messages=await getMessages(chatId,cursorId);
    const data={
      messages:messages,

    }
    if(messages.length>0)
    {
      
      data.cursorId=messages[messages.length-1].id;
    }
    return res.status(200).json(data);
  }
  catch(err)
  {
    console.log(err);
    return res.status(500).json({message:"Error occured"});
  }
}