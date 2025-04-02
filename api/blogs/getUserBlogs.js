const getUserBlogs=require("../../lib/blog/getUserBlog");
module.exports=async (req,res)=>{
  try{
    const userId=req.user.id;
    const cursorId=req.query.cursorId;
    const blogs=await getUserBlogs(cursorId,userId);
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
    console.error(error);
    return res.status(500).json({message:"Internal server error"});
  }
};