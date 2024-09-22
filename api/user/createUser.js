const prismaInstance = require("../../prismaInstance");
const getUser = require("../../lib/user/getUser");
const createUser = require("../../lib/user/createUser");

moudule.exports=async(req,res)=>{
  const{email,password}=req.body;
  try{
    const user=await getUser(email);
    if(user){
      return res.status(400).json({message:"User already exists"});
    }
  
   const Creatinguser =await createUser(email,password);
   if(Creatinguser==null){
     return res.status(400).json({message:"email cannot be empty"});
    }
    return res.status(200).json({message:"User created successfully"});
  }
  catch(error){
    console.log(error);
    return res.status(500).json({message:"Internal server error"});
  }

};