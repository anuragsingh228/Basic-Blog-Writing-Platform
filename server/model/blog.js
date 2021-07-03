const mongoose = require("mongoose");
var  Schema = mongoose.Schema;

// Create Schema
const BlogSchema = new Schema({

  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  }
});

module.exports = User = mongoose.model("blog", BlogSchema);
