const prismaInstance = require("../../prismaInstance");

module.exports =async function getUserBlogs(cursorId,userId)
{
  try{
    const queryOptions={
      take:10,
      orderBy:[
        {createdAt:"asc"}

      ],
      where:{
        userId:userId
      },
      select:{
        id:true,
        title:true,
        tags:true,
        createdAt:true,
        upvotes:true,
        userId:true,
      },
    }
    if(cursorId){
      queryOptions.skip=1;
      queryOptions.cursor={id:cursorId};
    }
    
    const blogs =await prismaInstance.blog.findMany(queryOptions);
    return blogs;
    
  }
  catch(error){
    console.log(error);
    throw new Error("Error in fetching blogs");
  }
}