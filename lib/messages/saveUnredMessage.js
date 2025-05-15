const prismaInstance = require("../../prismaInstance");

module.exports = async (userId, chatId) => {
  try {
    // Check if an unread entry already exists using raw SQL
    const [existing] = await prismaInstance.$queryRawUnsafe(
      `SELECT * FROM "UnreadMessage" WHERE "userId" = '${userId}' AND "chatId" = '${chatId}' LIMIT 1`
    );

    if (existing) {
      // Increment the unread count
      await prismaInstance.UnreadMessage.update({
        where: { id: existing.id },
        data: { count: { increment: 1 } },
      });
      return true;
    }

    // Create new unread message entry
    await prismaInstance.UnreadMessage.create({
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
