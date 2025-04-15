const prismaInstance = require('../../prismaInstance');
module.exports=async(blogId, cursorId=null)=>{
  try{
    const queryOptions = {
      take: 10,
      where: {
        blogId: blogId,
      },

      orderBy: {
        createdAt: "desc",
      },
    };
    if(cursorId)
    {
     queryOptions.cursor = { id: cursorId };
      queryOptions.skip = 1;
    }
    const comments=await prismaInstance.comment.findMany(queryOptions);
    
    return comments;
  }
  catch(error)
  {
    console.log(error);
    throw new Error("Error in fetching comments");
  }
}
