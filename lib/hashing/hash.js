const bcrypt = require("bcrypt");
const crypto = require("crypto");

// Function to hash the password
async function hashPassword(password) {
  const saltRounds = 10; // You can adjust salt rounds for more security, but 10 is a good default.
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.error("Error hashing password:", error);
    throw error;
  }
}

// Example usage:
(async () => {
  const password = "SuperSecurePassword";
  const hashedPassword = await hashPassword(password);
})();

async function comparePassword(password, hashedPassword) {
  try {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
  } catch (error) {
    console.error("Error comparing password:", error);
    throw error;
  }
}
function hashEmail(email) {

  const hashedEmail=crypto.createHash('sha256').update(email).digest('hex');
  return hashedEmail;
}
module.exports = { hashPassword, comparePassword,hashEmail };