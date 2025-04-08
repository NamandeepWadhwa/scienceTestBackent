const { content } = require("googleapis/build/src/apis/content");
const prismaInstance = require("../../prismaInstance");
module.exports=async (data)=>
{
  try{
      const comment=await prismaInstance.comment.create({
       data:{
        content:data.content,
        blogId:data.blogId,
        userId:data.userId,
       }
      });
      return comment;
  }
  catch(error)
  {
    console.log(error);
    throw new Error("Error in adding comment");
  }
}