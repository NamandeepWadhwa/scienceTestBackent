const prismaInstance = require('../../prismaInstance');
const hash=require('../hashing/hash');
async function verifyExistingUser(email){
  try{
    email = hash.hashEmail(email);
    const user=await prismaInstance.user.findUnique({
      where:{
        email:email,
      },
    });
    if(!user)return null;
    return user;
  }
  catch(error){
    console.log(error);
    throw new Error("Error in verifying user");
  }
}
module.exports=verifyExistingUser;