const prismaInstance = require("../../prismaInstance");
module.exports=async( userId, chatId,message)=>{
  try{
    const newMessage = await prismaInstance.message.create({
      data: {
        chatId: chatId,
        senderId: userId,
        content: message,
      },
    });
    return newMessage;
  }
  catch(err)
  {
    console.error(err);
    throw new Error("Error in creating message");
  }
 
}