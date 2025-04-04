const getFullBlog=require("../../lib/blog/getFullBlog");
module.exports=async (req,res)=>{
  try{
    const blogId=req.query.blogId;
    if(!blogId)
    {
      return res.status(400).json({message:"Blog id is required"});
    }
    const blog=await getFullBlog(blogId);
    return res.status(200).json(blog);

  }
  catch(err)
  {
    return res.stataus(500).json({message:"Internal server error"});
  }
}