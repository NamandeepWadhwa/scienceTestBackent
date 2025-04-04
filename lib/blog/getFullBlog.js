const prismaInstance = require("../../prismaInstance")
module.exports=async (blogId)=>{
  try{
    const blog=await prismaInstance.blog.findUnique({
      where:{
        id:blogId
      },
      select:{
        id:true,
        title:true,
        createdAt:true,
        content:true,
        tags:true,
        upvotes:true,
        userId:true,
      },
    });
    return blog;
  }
  catch(error){
    console.log(error);
    throw new Error("Error in fetching blog");
  }
};