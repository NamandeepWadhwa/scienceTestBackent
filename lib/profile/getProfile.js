const prismaInstance = require('../../prismaInstance');
async function getProfile(userId){
  try{
    const profile =await prismaInstance.profile.findUnique({
      where:{
        userId:userId
      }
    });
    return profile
    
  }
  catch(err){
    console.log(err);
    throw new Error("Error in getting profile");
  }
}
module.exports=getProfile;