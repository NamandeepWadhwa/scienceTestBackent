const prismaInstance = require("../../prismaInstance");

module.exports = async (userId, chatId) => {
  try {
    // Check if an unread entry already exists for this user and chat
    const existing = await prismaInstance.unreadMessage.findFirst({
      where: {
        userId,
        chatId,
      },
    });

    if (existing) {
      // Increment the unread count
       await prismaInstance.unreadMessage.update({
        where: { id: existing.id },
        data: { count: { increment: 1 } },
      });
      return true;
    }

    
     await prismaInstance.unreadMessage.create({
      data: {
        userId,
        chatId,
      },
    });

    return true;
  } catch (err) {
    console.error(err);
    throw new Error("Error saving unread message");
  }
};
