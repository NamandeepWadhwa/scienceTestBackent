const getUser = require("../../lib/user/getUser");
const createUser = require("../../lib/user/createUser");
const hash = require("../../lib/hashing/hash");
const createToken = require("../../lib/tokens/createToken");

module.exports=async(req,res)=>{
  try {
    const { email, password } = req.body;
    

    const user = await getUser(email);
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const Creatinguser = await createUser(email, password);
    if (Creatinguser == null) {
      return res
        .status(400)
        .json({ message: "email or password cannot be empty" });
    }
    const token = createToken(Creatinguser);
    return res.status(200).json({ token: token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }

};