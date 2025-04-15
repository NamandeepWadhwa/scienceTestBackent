const getBlogComments=require("../../lib/comments/getBlogComments")
module.exports=async(req,res)=>{
  try{
    const {blogId,cursorId}=req.query;
    if(!blogId)
    {
      return res.status(400).json({message:"Blog id is required"});
    }
    const comments=await getBlogComments(blogId,cursorId);
    let data={};
    if(comments.length>0){
      data.curserId=comments[comments.length-1].id;
    }
    else data.curserId=null;
    data.comments=comments;

    return res.status(200).json(data);
  }
  catch(error)
  {
    return res.status(500).json({message:"Internal server error"});
  }
}