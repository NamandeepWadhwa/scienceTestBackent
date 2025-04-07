const prismaInstance = require("../../prismaInstance");
module.exports=async (userId,cursorId=null)=>{
  try{
    const queryOptions={};
    queryOptions.take=10;
    queryOptions.orderBy=[
      {createdAt:"asc"}
    ];
    queryOptions.where={
      userId:userId
    };
    queryOptions.select={
      id:true,
      title:true,
      tags:true,
      createdAt:true,
      upvotes:true,
      userId:true,
    };
    if(cursorId){
      queryOptions.skip=1;
      queryOptions.cursor={id:cursorId};
    }
    const blogs=await prismaInstance.blog.findMany(queryOptions);
    return blogs;

  }
  catch(error){
    console.error(error);
    throw new Error("Error in fetching blogs");
  }

}