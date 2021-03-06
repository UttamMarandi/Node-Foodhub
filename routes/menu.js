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

router
  .route("/:id")
  .delete(isAdminstratorMiddleware, deleteMenu)
  .get(getSingleMenu);

// router.route("/user").post(createMenuUser);
// user can get only it's menus so no getAllUsersMenu

router.route("/user/:id").post(createMenuUser).get(isUser, getMenuUser);

module.exports = router;

// Example to set menuId in postman

// pm.test("set menuId",function(){
//     const{menu} = pm.response.json() //get the data from json
//     pm.environment.set("menuId",menu._id) //set the data
// })
