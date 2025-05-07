const  prismaInstance = require('../../prismaInstance');
module.exports=async(userId1, userId2)=>
{
    try{
      const chat = await prismaInstance.chat.findFirst({
        where: {
          participants: {
            every: {
              id: { in: [userId1, userId2] },
            },
          },
        },
      });
      if(chat)return true;
      return false;
    }
    catch(err)
    {
      console.error(err);
      throw new Error("There was the error while finding the chat");
    }
}