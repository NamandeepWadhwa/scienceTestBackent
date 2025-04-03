const prismaInstance = require('../../prismaInstance');

async function updateProfile(userId, name,imageUrl) {
  try{
  let data={};
  data.name=name;
  data.imageUrl=imageUrl;
  const updatedProfile=await prismaInstance.profile.update({
    where:{
      userId:userId
    },
    data:data
  });
  return updatedProfile;
  }
  catch(err){
    console.log(err);
    throw new Error("Error in updating profile");
  }


}
module.exports=updateProfile;