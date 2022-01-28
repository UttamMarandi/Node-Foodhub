const mongoose = require("mongoose");

const menuSchema = mongoose.Schema({
  menuName: {
    type: String,
    required: [true, "Menu Name required"],
  },
  menuItems: {
    type: Array,
  },
});

module.exports = mongoose.model("Menu", menuSchema);
