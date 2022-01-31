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

router.route("/").post(createMenu).get(getAllMenus);

router.route("/:id").delete(deleteMenu).get(getSingleMenu);

router.route("/user").post(createMenuUser);
// user can get only it's menus so no getAllUsersMenu

router.route("/user/:id").get(getMenuUser);

module.exports = router;
