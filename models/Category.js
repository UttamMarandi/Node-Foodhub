const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  categoryName: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
});

module.exports = mongoose.model("Category", categorySchema);
