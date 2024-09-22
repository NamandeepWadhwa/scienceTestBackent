const otpGenerator = require("otp-generator");
function generator(lenght) {
  return otpGenerator.generate(lenght, {
    upperCase: false,
    specialChars: false,
    alphabets: false,
  });
}
module.exports = generator;
