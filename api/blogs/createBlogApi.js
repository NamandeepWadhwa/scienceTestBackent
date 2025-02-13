const createBlog = require("../../lib/blog/createBlog");
module.exports = async (req, res) => {
  try {
    const data = req.body;
    data.userId = req.user.id;
    await createBlog(data);
    return res.status(200).json({ message: "Blog created successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};