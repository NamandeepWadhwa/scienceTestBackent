const dotenv = require("dotenv");
const nodemailer=require('nodemailer')
const {google}=require('googleapis')
dotenv.config();


const oAuth2Client= new google.auth.OAuth2(process.env.CLIENT_ID,process.env.CLIENT_SECRET,process.env.REDIRECTURI);
oAuth2Client.setCredentials({refresh_token:process.env.REFRESHTOKEN})




  const mailSender = async (email, title, body) => {
    try {
      const accesToken=await oAuth2Client.getAccessToken();
      const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: process.env.EMAIL,
          clientId: process.env.CLIENT_ID,
          clientSecret: process.env.CLIENT_SECRET,
          refreshToken: process.env.REFRESHTOKEN,
          accessToken: accesToken.token,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: title,
        text: body,
      };

      const result=await transport.sendMail(mailOptions)
      console.log(result);
      return result;

      
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }

    
  }; 
module.exports = mailSender;
