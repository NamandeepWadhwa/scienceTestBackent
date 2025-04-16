const prismaInstance = require("./../../prismaInstance");

module.exports = async (isUpvoted, blogId, userId) => {
  try {
    if (isUpvoted) {
      // Remove upvote
      await prismaInstance.Upvote.delete({
        where: {
          userId_blogId: {
            userId: userId,
            blogId: blogId,
          },
        },
      });

      // Decrement blog upvote count
      await prismaInstance.Blog.update({
        where: { id: blogId },
        data: {
          upvotes: {
            decrement: 1,
          },
        },
      });
      return;

    } else {
      // Add upvote
      await prismaInstance.Upvote.create({
        data: {
          userId: userId,
          blogId: blogId,
        },
      });

      // Increment blog upvote count
      await prismaInstance.Blog.update({
        where: { id: blogId },
        data: {
          upvotes: {
            increment: 1,
          },
        },
      });
      return;
    }
    
  } catch (err) {
    console.error("Upvote toggle error:", err);
    throw err;
  }
};
