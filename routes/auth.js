const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  userProfile,
  userLogout,
  allUsers,
  deleteUser,
} = require("../controllers/auth");
const { isAdminstratorMiddleware } = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", userLogout);
router.get("/userprofile", userProfile);
router.get("/allusers", isAdminstratorMiddleware, allUsers);
router.delete("/delete/:id", isAdminstratorMiddleware, deleteUser);

module.exports = router;
