const dotenv = require("dotenv");
dotenv.config();
 const nodemailer = require("nodemailer");

 const mailSender = async (email, title, body) => {
   try {
    console.log(email);
     // Create a Transporter to send emails
     let transporter = nodemailer.createTransport({
       host: process.env.MAIL_HOST,
       auth: {
         user: process.env.EMAIL,
         pass: process.env.EMAIL_PASSWORD,
       },
     });
     // Send emails to users
     let info = await transporter.sendMail({
       from: process.env.EMAIL,
       to: email,
       subject: title,
       html: body,
     });
     return info;
   } catch (error) {
     console.log(error.message);
     throw new Error("Error in sending mail");
   }
 };
 module.exports = mailSender;