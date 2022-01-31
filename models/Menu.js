const mongoose = require("mongoose");

const menuSchema = mongoose.Schema({
  menuName: {
    type: String,
    required: [true, "Menu Name required"],
  },
  menuItems: [String],
});

module.exports = mongoose.model("Menu", menuSchema);
