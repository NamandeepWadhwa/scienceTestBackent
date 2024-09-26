const getUser = require("../../lib/user/getUser");
const createAuthUser = require("../../lib/user/createAuthUser");
module.exports = async (req, res) => {
  console.log(req.body);
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "email cannot be empty" });
    }
   
  
    const user = await getUser(email);
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    } console.log(email);
    const Creatinguser = await createAuthUser(email);
    return res.status(200).json({ user: Creatinguser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
