const prismaInstance = require("../../prismaInstance");

module.exports=async (blogId,userId)=>{
  try{
   const user = await prismaInstance.Upvote.findUnique({
     where: {
       userId_blogId: {
         userId: userId,
         blogId: blogId,
       },
     },
   });
  
    if(!user || user.length<=0)return false;
    return true;
  }
  catch(err)
  {
    console.log(err);
    throw err;
  }

}