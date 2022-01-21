const express = require("express");
const router = express.Router();
const {
  getAllFoodItems,
  createFoodItem,
  deleteSingleFoodItem,
  getSingleFoodItem,
  patchSingleFoodItem,
} = require("../controllers/foodItem");

router.route("/").get(getAllFoodItems).post(createFoodItem);

router
  .route("/:id")
  .get(getSingleFoodItem)
  .patch(patchSingleFoodItem)
  .delete(deleteSingleFoodItem);

module.exports = router;
