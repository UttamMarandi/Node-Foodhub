const express = require("express");
const router = express.Router();
const {
  createMenu,
  deleteMenu,
  getAllMenus,
  getSingleMenu,
  createMenuUser,
  getMenuUser,
} = require("../controllers/menu");

const {
  isUser,
  isAdminstratorMiddleware,
} = require("../middleware/authMiddleware");

router.route("/").post(isAdminstratorMiddleware, createMenu).get(getAllMenus);

router.route("/:id").delete(deleteMenu).get(getSingleMenu);

// router.route("/user").post(createMenuUser);
// user can get only it's menus so no getAllUsersMenu

router.route("/user/:id").post(createMenuUser).get(isUser, getMenuUser);

module.exports = router;
