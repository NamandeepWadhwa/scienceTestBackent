const prismaInstance = require("../../prismaInstance");

module.exports=async(userId, userId2)=>{
  try{
    const chat = await prismaInstance.chat.create({
      data: {
        participants: {
          connect: [
            { id: userId },
            { id: userId2 },
          ],
        },
      },
    });
    return chat;
  }
  catch(err)
  {
    console.error(err);
    throw new Error("Error in creating chat");
  }

}