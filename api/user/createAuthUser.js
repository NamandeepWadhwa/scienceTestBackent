const getUser = require("../../lib/user/getUser");
const createAuthUser = require("../../lib/user/createAuthUser");
const hash = require("../../lib/hashing/hash");
module.exports = async (req, res) => {
  try {
    const { email } = req.body;
  
    const user = await getUser(email);
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const Creatinguser = await createAuthUser(email);
    if (Creatinguser == null) {
      return res.status(400).json({ message: "email cannot be empty" });
    }
    return res.status(200).json({ user: Creatinguser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
