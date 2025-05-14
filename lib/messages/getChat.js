const prismaInstance = require("../../prismaInstance");

module.exports = async (chatId) => {
  try {
    const chat=await prismaInstance.chat.findUnique({
      where:{
        id:chatId,
      }
    });
    return chat;
  } catch (err) {
    console.error(err);
    throw new Error("There was an error while finding the chat");
  }
};
