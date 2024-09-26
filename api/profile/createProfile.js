const getProfile=require('../../lib/profile/getProfile');
const createProfile=require('../../lib/profile/createProfile');
module.exports=async(req,res)=>{
  try{
  const userId=req.user.id;
  const {name,imageUrl}=req.body;
  if(!name || !imageUrl){
    return res.status(400).json({message:"Please provide all the fields"});
  }
  const profile=await getProfile(userId);
  if(profile){
    return res.status(400).json({message:"Profile already exists"});
  }
  const newProfile=await createProfile(userId,name,imageUrl);
  const data={
    userProfile:newProfile,
    message:"Profile created successfully"
  }
  return res.status(200).json({data});
}catch(err){
  console.log(err);
  return res.status(500).json({message:"Internal Server Error"});
}
};
