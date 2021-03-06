const mongoose = require("mongoose");

const foodItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name of Food Item required"],
      trim: true,
      maxlength: [20, "name can not be more than 20 characters"],
    },
    description: {
      type: String,
      required: [true, "Define food item qualities"],
    },
    categories: [String],
    price: {
      type: Number,
      required: [true, "Food price must be provided"],
    },
    calories: {
      type: Number,
      required: [true, "Please provide food calories"],
    },
    isFavourite: {
      type: Boolean,
      default: false,
    },
    imageUrl: {
      type: String,
      required: [true, "Please provide valid image"],
    },
    createAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("FoodItem", foodItemSchema);

// maxLenth is not defined for type array

// for categories front_end,
// get the _id of each category and store it in category id as string
