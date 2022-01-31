const mongoose = require("mongoose");

const userMenu = mongoose.Schema({
  userId: {
    type: String,
    required: [true, "Please provide user id"],
  },
  menuName: {
    type: String,
    required: [true, "Menu Name required"],
  },
  menuItems: [String],
});

module.exports = mongoose.model("UserMenu", userMenu);
