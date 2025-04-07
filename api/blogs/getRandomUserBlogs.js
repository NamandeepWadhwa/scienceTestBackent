const getRandomUserBlogs=require("../../lib/blog/getRandomUserBlogs");
module.exports=async (req,res)=>{
  try{
   const {userId,cursorId}=req.query;
    const blogs=await getRandomUserBlogs(userId,cursorId);
    const data={};
    if(!userId)return res.status(400).json({message:"User id is required"});
    data.blogs=blogs;
    if(blogs.length>0)
    {
      const id=blogs[blogs.length-1].id;
      data.cursorId=id;
    }
    else{
      data.cursorId=null;
    }
    return res.status(200).json(data);
  }
  catch(error){

    return res.status(500).json({message:"Internal server error"});
  }
}