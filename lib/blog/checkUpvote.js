const prismaInstance = require("../../prismaInstance");

module.exports=async (blogId,userId)=>{
  try{
    const user=prismaInstance.upVotes.findUnique({
      where:{
        blogId:blogId,
        userId:userId

      }
    });
    if(!user)return false;
    return true;
  }
  catch(err)
  {
    console.log(err);
    throw err;
  }

}