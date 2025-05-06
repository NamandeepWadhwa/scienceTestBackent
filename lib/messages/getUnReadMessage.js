const  prismaInstance = require('../../prismaInstance');

module.exports=async (userId)=>{
  try{
    const unreadMessages = await prismaInstance.UnreadMessage.count({
      where: { userId: userId },
    });
    
    return unreadMessages;
  }
  catch(err)
  {
    console.error(err);
    
    throw new Error("Error in getting unread messages");
  }
}