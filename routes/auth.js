const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  userProfile,
  userLogout,
} = require("../controllers/auth");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", userLogout);
router.get("/userprofile", userProfile);

module.exports = router;
