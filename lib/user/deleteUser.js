const prismaInstance=require('../../prismaInstance')
module.exports=async(userId)=>{
  try{
    await prismaInstance.user.delete({
      where:{
        id:userId
      }
    });
    return true;


  }
  catch(err){
    throw new Error(err);
  }
}