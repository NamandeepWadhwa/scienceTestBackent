const prismaInstance = require("../../prismaInstance");
const hash = require("../hashing/hash");

module.exports = async function createAuthUser(email) {
   try {
     email = hash.hashEmail(email);

     const user = await prismaInstance.user.create({
       data: {
         email,
       },
     });
     return user;
   } 
   catch (error) {
     console.log(error);
     throw new Error("Error in creating user");
   }

}