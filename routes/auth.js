const express = require("express");
const router = express.Router();
const { registerUser, loginUser, userProfile } = require("../controllers/auth");

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/userprofile", userProfile);

module.exports = router;
