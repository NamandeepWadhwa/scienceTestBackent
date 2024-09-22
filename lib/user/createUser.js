const generateOtp = require('../otp/generateOtp');
const prismaInstance = require('../../prismaInstance');

async function createUser(email,password){
  if(!email){return null;}
  password=password||generateOtp(8);
  try{
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
moudule.exports=createUser;