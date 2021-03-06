const mongoose = require("mongoose");
var  Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

// Create Schema
const BlogSchema = new Schema({

  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  by: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  }
});

module.exports = User = mongoose.model("blog", BlogSchema);
