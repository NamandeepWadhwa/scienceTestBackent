const mailSender = require('../../lib/mail/sendEmail');
const prismaInstance = require('../../prismaInstance');
const generateOtp = require('../../lib/otp/generateOtp');

module.exports = async (req, res) => {
  
  
  try{
    console.log(req.body);
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Please provide email" });
    } 
    const newOtp = generateOtp(6);
    const otpData=await prismaInstance.otp.findUnique({
      where: {
        email,
      },
    });
    if(otpData){
      await prismaInstance.otp.update({
        where: {
          email,
        },
        data: {
          otp: newOtp,
          createdAt:new Date()
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
    const data2=await mailSender(email, title, body);
    let data={};
    data.message="OTP sent successfully";
  
    if(process.NODE_ENV!=="production"){
      data.otp=newOtp;
    }
    return res.status(200).json({data});


  }
  catch(error){
    console.log(error);
    return res.status(500).json({message:"Internal server error"});
  }

};