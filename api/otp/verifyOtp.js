// this function is used to verify the otp sent to the user
const prismaInstance = require("../../prismaInstance");
module.exports = async (req, res) => {
  const {email, otp} = req.body;
  try{
    const otpData=await prismaInstance.otp.findUnique({
      where: {
        email,
      },
    });
    if(!otpData){
      return res.status(400).json({message:"Invalid OTP"});
    }
    const timeNow=new Date();
    const otpTime=new Date(otpData.createdAt);
    const timeDifference=timeNow-otpTime;
    const fiveMinutes=5*60*1000;
    if(timeDifference>fiveMinutes){
      return res.status(410).json({message:"OTP expired"});
    }
    if(otp!=otpData.otp){
      return res.status(400).json({message:"Invalid OTP"});
    }
    await prismaInstance.otp.delete({
      where:{
        email,
      },
    });
    return res.status(200).json({message:"OTP verified"});
    
    
      }
      catch(error){
        // If an error occurs, return a 500 error
        console.log(error);
        return res.status(500).json({message:"Internal server error"});
      }

};