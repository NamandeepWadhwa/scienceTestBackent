const createBlog = require("../../lib/blog/createBlog");
module.exports = async (req, res) => {
  try {
    const blog = req.body;
    blog.userId = req.user.id;
    const data=await createBlog(blog);
    return res.status(200).json( data );
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};