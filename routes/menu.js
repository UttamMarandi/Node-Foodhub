const express = require("express");
const router = express.Router();
const {
  createMenu,
  deleteMenu,
  getAllMenus,
  getSingleMenu,
  createMenuUser,
} = require("../controllers/menu");

router.route("/").post(createMenu).get(getAllMenus);

router.route("/:id").delete(deleteMenu).get(getSingleMenu);

router.route("/user").post(createMenuUser);

module.exports = router;
