const jwt=require('jsonwebtoken');
require('dotenv').config();

function createToken(user){
  const palyLoad={
    id:user.id,
    email:user.email,
  };
  return jwt.sign(palyLoad,process.env.JWT_SECRET);
}
module.exports=createToken;