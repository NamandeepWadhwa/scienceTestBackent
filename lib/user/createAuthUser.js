const prismaInstance = require("../../prismaInstance");
const hash = require("../hashing/hash");

module.exports = async function createAuthUser(email) {
  if(!email){return null;}
  email = hash.hashEmail(email);
  try {
    const user = await prismaInstance.user.create({
      data: {
        email,
      },
    });
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Error in creating user");
  }

}