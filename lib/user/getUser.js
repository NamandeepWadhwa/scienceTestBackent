const prismaInstance = require("../../prismaInstance");
const hash = require("../hashing/hash");
async function getUser(email){
  try{
    
    
     let email2=email;
     email2= hash.hashEmail(email2);
    

    const user = await prismaInstance.user.findUnique({
      where:{
        email:email2
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