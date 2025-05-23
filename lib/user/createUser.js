const prismaInstance = require('../../prismaInstance');
const hash=require('../hashing/hash');

async function createUser(email,password){

 
  try{
     password = await hash.hashPassword(password);
     email = hash.hashEmail(email);
    const user=await prismaInstance.user.create({
      data:{
        email,
        password,
      },
    });
    return user;
  }
  catch(error){
    console.log(error);
    throw new Error("Error in creating user");
  }
}
module.exports=createUser;