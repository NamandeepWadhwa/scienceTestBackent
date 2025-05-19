const verifyExistingUser=require("../../lib/user/verifyExistingUser")
module.exports = async (req, res) => {
  try{
    const email=req.query.email;
    if(!email) return res.status(400).json({ message: "no email found" });
    const user=await verifyExistingUser(email);
    if(user)return res.status(200).json(true);
    return res.status(200).json(false);

  }
  catch(error){
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}