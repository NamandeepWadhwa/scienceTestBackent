const checkUpvotes=require("../../lib/blog/checkUpvote")
module.exports=async (req,res)=>{
  try{
    const userId=req.user.id;
    const blogId=req.query.blogId;
    if(!blogId)return res.status(400).json({message:"BlogId required"});
    const isUpvoted=await checkUpvotes(blogId,userId);
    return res.status(200).json(isUpvoted);
  }
  catch(err)
  {
    return res.status(500).json({message:"Internal server error"})
  }
}