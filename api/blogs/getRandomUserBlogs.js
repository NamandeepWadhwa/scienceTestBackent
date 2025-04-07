const getRandomUserBlogs=require("../../lib/blog/getRandomUserBlogs");
module.exports=async (req,res)=>{
  try{
    const userId=req.body.userId;
    const cursorId=req.body.cursorId;
    const blogs=await getRandomUserBlogs(userId,cursorId);
    const data={};
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