module.exports=async (req,res)=>{
  try{
  console.log(req.user);
  res.status(200).json({message:"User created"});
  }
  catch(error){
    console.log(error);
    return res.status(500).json({message:"Internal server error"});
  }
  
}