const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  CategoryName: {
    type: String,
    required: true,
  }
  
});

const userModel = mongoose.model("foodcategory", userSchema);
module.exports = userModel;