const prismaInstance = require("../../prismaInstance");

module.exports = async (blogId, userId) => {
  try {
    // Fetch the author of the blog
    const author = await prismaInstance.blog.findUnique({
      where: { id: blogId },
      select: { userId: true },
    });

    // If no author found or userId doesn't match, return false
    if (!author || author.userId !== userId) return false;

    // Delete the blog
    await prismaInstance.blog.delete({
      where: { id: blogId },
    });

    return true;
  } catch (err) {
    // Log error correctly
    console.error(err);
    return false;
  }
};
