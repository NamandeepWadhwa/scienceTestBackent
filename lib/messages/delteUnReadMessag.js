const prismaInstance = require("../../prismaInstance");

module.exports=async (userId, chatId)=>{
  try{
    const unreadMessage= await prismaInstance.unreadMessage.deleteMany({
      where: {
        userId: userId,
        chatId: chatId,
      },
    });
    console.log(unreadMessage);
    return;
  }
  catch(err)
  {
    console.error(err);
    throw new Error("Error in deleting unread message");
  }
}