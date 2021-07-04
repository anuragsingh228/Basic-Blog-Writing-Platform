const mongoose = require("mongoose");
var  Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

// Create Schema
const CommentSchema = new Schema({

  by: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  reply:{
    type: [String],
    default: []
  },
  blogid: {
    type: ObjectId
  }
});

module.exports = User = mongoose.model("comment", CommentSchema);
