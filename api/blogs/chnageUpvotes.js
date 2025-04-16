const changeUpvotes=require("../../lib/blog/changeUpvotes")
module.exports=async (req,res)=>{
  try{
    const userId=req.user.id;
    const {isUpvoted,blogId}=req.body;
    
    if(isUpvoted===undefined || !blogId)return res.status(400).json({"message":"BlogID and upVotedStatus required"});
    await changeUpvotes(isUpvoted,blogId,userId);
    console.log("Upvote status changed successfully");
    return res.status(200).json({message:"Upvote status changed successfully"});
  }
  catch(err)
  {
    console.error(err);
    return res.status(500).json({"message":"Internal server error"}); 
  }
}