const prismaInstance=require("./../../prismaInstance");
module.exports=async(isUpvoted,blogId,userId)=>
{
  try{
  
    if(isUpvoted)
    {
          await prismaInstance.Upvote.delete({
            where:{
              userId:userId,
              blogId:blogId
            }
          });

            const upvotes = await prismaInstance.Blog.findUnique({
              where: {
                id: blogId,
              },
              select: {
                upvotes: true,
              },
            });

            // TODO: chnage the upVotes;
       return data={
        upVotes:upvotes,
        isUpvoted:false,
       }
         
          
    }
    else
    {
     await prismaInstance.Upvote.create({
      data:{
        userId:userId,
        blogId:blogId,
      }
     });
     const upvotes = await prismaInstance.Blog.findUnique({
       where: {
         id: blogId,
       },
       select: {
         upvotes: true,
       },
     });
     // TODO update the upvotes
     return data={
      isUpvoted:true,
      upvotes:upvotes
     }
    }
  
  }
  catch(err)
  {
    console.log(err);
    throw err;
  }
}