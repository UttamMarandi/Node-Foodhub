const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const User = require("../models/User");
const { verifyPassword } = require("../utils/hash");

const passportCB = (email, password, done) => {
  console.log("hello");
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        return done(null, false);
      }
      const isValid = verifyPassword(password, user.hash);

      if (isValid) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
    .catch((err) => done(err));
};

const strategy = new localStrategy(passportCB);
passport.use(strategy);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((userId, done) => {
  User.findOne({ _id: userId })
    .then((user) => done(null, user.email))
    .catch((err) => done(err));
});

// Implementation of https://github.com/woodburydev/passport-local-video/blob/master/backend/server.js
//Failed
//seems like main repo itself is not working
