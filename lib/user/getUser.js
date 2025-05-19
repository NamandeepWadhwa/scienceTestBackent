const hash=require('../hashing/hash')
const prismaInstance = require("../../prismaInstance");

module.exports=async (email,password)=>
{
  try{
    email=hash.hashEmail(email);
    console.log(email);
    const user = await prismaInstance.user.findUnique({
      where: {
        email: email,
      },
    });
    if(!user)return null;
    const hashedPassword=user.password;
    const passwordMatch=await hash.comparePassword(password,hashedPassword);
    if(!passwordMatch){
     return null;
    }
    return user;
    


  }
  catch(err)
  {
    console.error(err);
    throw new Error("Internal server error")
  }
}
