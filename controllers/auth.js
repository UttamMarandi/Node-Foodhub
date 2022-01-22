const asyncWrapper = require("../middleware/async");

const registerUser = asyncWrapper(async (req, res) => {
  res.status(200).json({ msg: "User Registered" });
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
