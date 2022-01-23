const express = require("express");
const router = express.Router();
const { registerUser, loginUser, userProfile } = require("../controllers/auth");
const passport = require("passport");

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/userprofile", userProfile);

module.exports = router;
