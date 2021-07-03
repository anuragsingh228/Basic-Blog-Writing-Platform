const mongoose = require("mongoose");
var  Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({

  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true
  }
});

module.exports = User = mongoose.model("users", UserSchema);
