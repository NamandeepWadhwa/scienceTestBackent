const changeUpvotes=require("../../lib/blog/changeUpvotes")
module.exports=async (req,res)=>{
  try{
    const userId=req.user.id;
    const {isUpvoted,blogId}=req.body;
    if(!isUpvoted,blogId)return res.status().json({"message":"BlogID and upVotedStatus required"});
    const data=await changeUpvotes(isUpvoted,blogId,userId);
    return res.status(200).json(data);
  }
  catch(err)
  {
    return res.status(500).json({"message":"Internal server error"}); 
  }
}