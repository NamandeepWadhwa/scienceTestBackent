const prismaInstance = require("../../prismaInstance");
const hash = require("../hashing/hash");
async function getUser(email){
  if(!email){return null;}
  try{
    const email = hash.hashEmail(email);
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