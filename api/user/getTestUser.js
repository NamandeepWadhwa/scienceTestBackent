const createUser = require("../../lib/user/createUser");
const getUser = require("../../lib/user/getUser");
const createToken = require("../../lib/tokens/createToken");

module.exports = async (req, res) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "email or password cannot be empty" });
    }

    const user = await getUser(email,password);
    if (user) {
      const token = createToken(user);
      return res.status(200).json({ token: token });
    }
    const Creatinguser = await createUser(email, password);
    const token = createToken(Creatinguser);
    return res.status(200).json({ token: token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};