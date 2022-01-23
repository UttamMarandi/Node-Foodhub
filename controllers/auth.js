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

const loginUser = asyncWrapper(async (req, res) => {
  res.status(200).json({ msg: "User Login" });
});

const userProfile = asyncWrapper(async (req, res) => {
  res.status(200).json({ msg: "User Profile" });
});

module.exports = {
  registerUser,
  loginUser,
  userProfile,
};
