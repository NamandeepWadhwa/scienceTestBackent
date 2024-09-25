const passport = require('passport');
const passportJWT = require('passport-jwt');
const ExtractJwt = passportJWT.ExtractJwt;
const ExtractStrategy = passportJWT.Strategy;
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
  secretOrKey: process.env.JWT_SECRET,
};
const strategy = new ExtractStrategy(jwtOptions, (jwt_payload, done) => {
  if(jwt_payload){
    return done(null, {
      id: jwt_payload.id,
      email: jwt_payload.email,
    });
  }
  else{
    return done(null, false);
  }

});
passport.use(strategy);

const authenticate = passport.authenticate('jwt', {session: false});
module.exports = authenticate;
