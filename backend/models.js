const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  CategoryName: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  options: [{
    half: {
      type: String,
      required: true,
    },
    full: {
      type: String,
      required: true,
    },
  }],
  description: {
    type: String,
    required: true,
  },
});




const userModel = mongoose.model("sample", userSchema);
module.exports = userModel;
