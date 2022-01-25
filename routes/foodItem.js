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
// router.get("/:id", getSingleFoodItem);
// router.patch("/:id",isAdminstratorMiddleware,updateSingleFoodItem);
// router.delete("/:id",isAdminstratorMiddleware,deleteSingleFoodItem)

router
  .route("/:id")
  .get(getSingleFoodItem)
  .patch(isAdminstratorMiddleware, updateSingleFoodItem)
  .delete(isAdminstratorMiddleware, deleteSingleFoodItem);

module.exports = router;
