const express = require("express");
const router = express.Router();
const { createMenu } = require("../controllers/menu");

router.route("/").post(createMenu);

module.exports = router;
