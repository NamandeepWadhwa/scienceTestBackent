const prismaInstance = require('../../prismaInstance');
module.exports=async(chatId)=>{
  try{
    const chat=await prismaInstance.chat.findUnque({
      where:{
        chatId:chatId,
      }
    });
  }
  catch(err)
  {
    console.error(err);
    throw new Error("There was the error while finding the chat");
  }
}