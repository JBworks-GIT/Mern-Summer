const mongoose = require("mongoose");
const authSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    // required: true, //for generic error
    required : ["Email is required"], //for specific error
    unique : true ,  
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});


const userModel = mongoose.model("Users" , authSchema);

module.exports={userModel};