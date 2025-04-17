const deleteBlog = require("../../lib/blog/deleteBlog");

module.exports = async (req, res) => {
  try {
    const userId = req.user.id;
    const blogId = req.query.blogId;

    // Check if blogId is provided
    if (!blogId) {
      return res.status(400).json({ message: "Blog ID required" });
    }

    // Attempt to delete the blog
    const success = await deleteBlog(blogId, userId);

    // If blog is deleted successfully
    if (success) {
      return res.status(200).json({ message: "Blog deleted successfully" });
    }

    // If deletion fails or user is unauthorized
    return res
      .status(401)
      .json({ message: "Unauthorized action or blog not found" });
  } catch (err) {
    // Log the error and return 500 for internal server issues
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
