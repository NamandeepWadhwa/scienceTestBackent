const addComment = require("../../lib/comments/addComment");

module.exports = async (req, res) => {
  try {
    let data = req.body;
    const userId = req.user.id;
    data.userId = userId;

    const comment = await addComment(data);
    return res.status(200).json(comment);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
