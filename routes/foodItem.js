const express = require("express");
const router = express.Router();
const {
  getAllFoodItems,
  createFoodItem,
  deleteSingleFoodItem,
  getSingleFoodItem,
  updateSingleFoodItem,
} = require("../controllers/foodItem");
const { isAdminstratorMiddleware } = require("../middleware/authMiddleware");

router.route("/").get(getAllFoodItems);
router.post("/", isAdminstratorMiddleware, createFoodItem);
router
  .route("/:id")
  .get(getSingleFoodItem)
  .patch(updateSingleFoodItem)
  .delete(deleteSingleFoodItem);

module.exports = router;
