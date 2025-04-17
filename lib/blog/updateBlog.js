const prismaInstance = require("../../prismaInstance");

module.exports = async (blog, userId) => {
  try {
    const { id: blogId, ...updateBlog } = blog;

    // Get the blog's author ID
    const author = await prismaInstance.blog.findUnique({
      where: { id: blogId },
      select: { userId: true },
    });

    // If no blog found or user doesn't match, return null
    if (!author || author.userId !== userId) return null;

    // Update blog
    const updated = await prismaInstance.blog.update({
      where: { id: blogId },
      data: updateBlog,
    });

    return updated;
  } catch (err) {
    console.error("Error updating blog:", err);
    return null;
  }
};
