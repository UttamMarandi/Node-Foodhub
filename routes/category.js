const express = require("express");
const router = express.Router();
const {
  createCategory,
  getAllCategory,
  deleteCategory,
} = require("../controllers/category");
const { isAdminstratorMiddleware } = require("../middleware/authMiddleware");

router
  .route("/")
  .post(isAdminstratorMiddleware, createCategory)
  .get(getAllCategory);
router.route("/:id").delete(isAdminstratorMiddleware, deleteCategory);

module.exports = router;
