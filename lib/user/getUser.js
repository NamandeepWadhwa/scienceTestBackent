const prismaInstance = require("../../prismaInstance");
async function getUser(email){
  if(!email){return null;}
  try{
    const user = await prismaInstance.user.findUnique({
      where:{
        email
      }
    });
    return user;
  }
  catch(error){
    console.log(error);
    throw new Error("Error in getting user");
  }

}
module.exports = getUser;