const prismaInstance = require("../../prismaInstance");
module.exports=async(userId)=>{
  try{
    const unreadChat = await prismaInstance.UnreadMessage.findMany({
      where:{userId:userId},
    });
    return unreadChat;
  }
  catch(err)
  {
    console.error(err);
    throw new Error("There was an error while finding the chat");
  }
}