const prismaInstance = require("../../prismaInstance");

module.exports = async (userId, commentId) => {
  try {
    const commentUser = await prismaInstance.comment.findUnique({
      select: { userId: true },
      where: { id: commentId },
    });

    if (!commentUser || commentUser.userId !== userId) return false;

    await prismaInstance.comment.delete({
      where: { id: commentId },
    });

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
