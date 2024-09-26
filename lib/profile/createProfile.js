const prismaInstance = require('../../prismaInstance');
async function createProfile(userId,name,imageUrl){
  try{
    console.log(userId);
    const profile =await prismaInstance.profile.create({
      data:{
        name:name,
        imageUrl:imageUrl,
        userId:userId
      }
    });
    return profile;
  }
  catch(err){
    console.log(err);
    throw new Error("Error in creating profile");
  }
}
module.exports=createProfile;