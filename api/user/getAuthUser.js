const getUser = require("../../lib/user/getAuthUser");
const createUser = require("../../lib/user/createAuthUser");
const createToken = require("../../lib/tokens/createToken");

module.exports = async (req, res) => {
  try {
    const email = req.body.email;
    if (!email) return res.status(400).json({ message: "No email found" });
    const user = await getUser(email);
    if (!user) {
      const newUser = await createUser(email);
      const token = createToken(newUser);
      return res.status(201).json({ token: token });
    }
    const token = createToken(user);
    return res.status(200).json({ token: token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Interal server error" });
  }
};
