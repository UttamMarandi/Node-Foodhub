const express = require("express");
const router = express.Router();
const { createMenu, deleteMenu, getAllMenus } = require("../controllers/menu");

router.route("/").post(createMenu).get(getAllMenus);

router.route("/:id").delete(deleteMenu);

module.exports = router;
