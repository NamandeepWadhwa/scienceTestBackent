const prismaInstance = require('../../prismaInstance');
module.exports = async function getRandomProfile(userId) {
  try{
    const profile=await prismaInstance.profile.findUnique({
      where:{
       userId:userId
      },
    });
    return profile;
  }
  catch(err){
    console.log(err);
    throw new Error("Error in getting random profile");
  }
}