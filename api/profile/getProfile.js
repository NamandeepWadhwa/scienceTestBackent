const getProfilefromLib = require('../../lib/profile/getProfile');
module.exports = async function getProfile(req, res) {
  try{
    const userId = req.userId;
    const profile = await getProfilefromLib(userId);
    if(!profile){
      return res.status(404).json({message:"Profile not found"});
    }
    return res.status(200).json({profile});
  }
  catch(err){
    console.log(err);
    return res.status(500).json({message:"Internal Server Error"});
  }
};