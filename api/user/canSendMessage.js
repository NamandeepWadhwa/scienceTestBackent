const getRandomProfile= require('../../lib/profile/getRandomProfile');
module.exports=async(req,res)=>{
  try{
    const userId=req.user.id;
   const userId2=req.query.userId2
    if(userId===userId2)return res.status(200).json({"canSendMessage":false})
    const profile=await getRandomProfile(userId2);
  
  if(!profile) return res.status(200).json({"canSendMessage":false});
  
  return res.status(200).json({"canSendMessage":true});
  }
  catch(err)
  {
      console.log(err);
      return res.status(500).json({"message":"Some internal error occured"});
  }
}