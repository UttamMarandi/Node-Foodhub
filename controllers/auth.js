const User = require("../models/User");
const passport = require("passport");
const bcrypt = require("bcryptjs");

const asyncWrapper = require("../middleware/async");

const registerUser = asyncWrapper(async (req, res) => {
  User.findOne({ email: req.body.email }, async (err, doc) => {
    // doc is the document which satisfies the filter

    if (err) {
      return res.status(400).json({ msg: "Error in registerUser 1st block" });
    }
    if (doc) {
      return res.status(400).json({ msg: "User already exists" });
    }
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 12);
      const newUser = { ...req.body, password: hashedPassword };
      const savedUser = await User.create(newUser);
      return res.status(200).json({ savedUser });
    }
  });
});

const loginUser = asyncWrapper(async (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res
        .status(400)
        .json({ msj: "Erron in passport authenticate block" });
    }
    if (!user) {
      return res.status(400).json({ msj: "No user Exists" });
    } else {
      req.logIn(user, (err) => {
        if (err) {
          return res
            .status(400)
            .json({ msj: "Error in passport Authenticate logIn block" });
        }
        res.status(200).json({
          msg: "Succesfully Authenticated & Logged In",
          user: req.user,
        });
      });
    }
  })(req, res, next);
});

const userLogout = asyncWrapper(async (req, res) => {
  req.logout();
  // res.redirect("/")
  res.status(200).json({ msg: "User logged out" });
});

const allUsers = asyncWrapper(async (req, res) => {
  const allusers = await User.find({ isAdmin: false });
  res.status(200).json({ allusers, nbHits: allusers.length });
});

const userProfile = asyncWrapper(async (req, res) => {
  res.status(200).json({ msg: "User Profile", user: req.user });
});

module.exports = {
  registerUser,
  loginUser,
  userLogout,
  userProfile,
  allUsers,
};
