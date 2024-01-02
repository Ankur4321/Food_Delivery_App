const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/gofoodmern")
.then(()=>{
  console.log("connected successfully");
}).catch((err)=>{
  console.log(err.message);
})
