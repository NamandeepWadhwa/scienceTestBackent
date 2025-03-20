const seedDatabase=require('../../seed')
module.exports=async (req,res)=>{
  try{
    await seedDatabase();
    return res.status(200).json({message:"Database seeded successfully"});
  }
  catch(error){
    console.error(error);
    return res.status(500).json({message:"Internal server error"});
  }
};