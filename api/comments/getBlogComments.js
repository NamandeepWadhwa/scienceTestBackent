const getBlogComments=require("../../lib/comments/getBlogComments")
module.exports=async(req,res)=>{
  try{
    const {blogId,cursorId}=req.query;
    console.log("blogId",blogId);
    console.log("cursorId",cursorId);
    if(!blogId)
    {
      return res.status(400).json({message:"Blog id is required"});
    }
    const comments=await getBlogComments(blogId,cursorId);
    return res.status(200).json(comments);
  }
  catch(error)
  {
    return res.status(500).json({message:"Internal server error"});
  }
}