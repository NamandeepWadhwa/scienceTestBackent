const getAllBlogs=require("../../lib/blog/getAllblogs");
module.exports=async (req,res)=>{
  try{
    const cursorId=req.query.cursorId;
    const latest=req.query.latest;
    const byUpvotes=req.query.byUpvotes;
    const tag=req.query.tag;
    
    const blogs = await getAllBlogs(latest, byUpvotes, cursorId,tag);
   
    if(blogs.length>0)
    {
      const id=blogs[blogs.length-1].id;
      const data={
        cursorId:id,
        blogs:blogs
      }
      return res.status(200).json(data);
    }
    else{
        const data={
      cursorId:null,
      blogs:blogs
    }
    return res.status(200).json(data);
  }
  
  }
  catch(error){
    console.error(error);
    return res.status(500).json({message:"Internal server error"});
  }
};