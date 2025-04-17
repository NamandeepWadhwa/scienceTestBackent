const updateBlog = require("../../lib/blog/updateBlog");
module.exports = async (req, res) => {
  try {
    let blog = req.body;
  
    if(!blog.id || !blog.title || !blog.tags || !blog.content )return res.status(400).json({message:"Blog Id should be included"});
    const id=req.user.id;
    const data=await updateBlog(blog,id);
    if(data===null)return res.status(500).json({message:"some error occured"});
    return res.status(200).json( data );
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};