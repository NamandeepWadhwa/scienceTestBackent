const getUserComments=require("../../lib/comments/getUserComment")
module.exports=async (req,res)=>{
  try{
    const userId=req.user.id;
    if(!userId)return res.status(400).json({message:"User Id/token required"});
    const { curosrId } = req.query;
    console.log(curosrId);
   
    const comments = await getUserComments(userId, curosrId);
    const data={
      comments:comments,
      cursorId:comments.length>0?comments[comments.length-1].id:null,
    };
   
    return res.status(200).json(data);

  }
  catch(error)
  {
    console.error(error);
    return res.status(500).json({message:"Internal server error"});
  }
};