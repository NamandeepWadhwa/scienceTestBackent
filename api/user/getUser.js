const getUser = require("../../lib/user/getUser");
const createToken = require("../../lib/tokens/createToken");
module.exports = async (req, res) => {
  try {
    const email = req.body.email;
    const password=req.body.password
    if (!email || !password) return res.status(400).json({ message: "no email found" });
    const user = await getUser(email,password);
    if (!user) {
      return res.status(400).json({ message: "Email and password do not match" });
    }
    const token = createToken(user);
    return res.status(200).json({ token: token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
