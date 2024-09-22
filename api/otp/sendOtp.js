const mailSender = require('../../lib/mail/sendEmail');
const prismaInstance = require('../../prismaInstance');
const generateOtp = require('../../lib/otp/generateOtp');

module.exports = async (req, res) => {
  const { email } = req.body;
  try{
    const newOtp = generateOtp(6);
    const otpData=await prismaInstance.otp.findUnique({
      where: {
        email,
      },
    });
    if(otpData){
      await prismaInstance.otp.update({
        where:{
          email,
        },
        data:{
          otp:newOtp,
        },
      });
    }
    else{
      await prismaInstance.otp.create({
        data:{
          email,
          otp:newOtp,
        },
      });
    }
    const title="OTP verification";
    const body=`<h1>Your OTP is ${newOtp}</h1>`
    await mailSender(email, title, body);
    return res.status(200).json({message:"OTP sent successfully"});


  }
  catch(error){
    console.log(error);
    return res.status(500).json({message:"Internal server error"});
  }

};