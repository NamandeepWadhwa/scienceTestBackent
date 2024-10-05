const prismaInstance=require('../../prismaInstance')
module.exports=async (userId)=>
{
  try{
    const deletedProfile=await prismaInstance.profile.delete({
      where:{
        userId:userId 
      }
  });
  return deletedProfile;
}
  catch(err){
    throw new Error(err);
  }
  
}