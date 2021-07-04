const blog = require("../model/blog");
const comment = require("../model/comments");
const _ = require("lodash");
const comments = require("../model/comments");



exports.createComment = (req, res, next) =>{
  const { blogid, by, content } = req.body;
  try {
      const newComment = comment({
        by,
          content,
          blogid
        });
      console.log(newComment);
      newComment.save((err, comment) => {
          if(!err){
            console.log(comment);
            res.status(200).json(comment);
          } else {
              console.log(err);
          }
        });
  }catch (err) {
      return res.status(500).json({ errors: [{ msg: "Server Error" }] });
    }
}

exports.getAllCommentsOnBlog = async (req, res, next) => {
    let blogId = req.params.id;
    console.log(blogId);
    comments.find({blogid: blogId}, (err, responce) => {
      res.status(200).json(responce);
    })
}

exports.replyOncomment = (req, res, next) => {
  let commentId = req.body.id;
  let comment = req.body.comment;
  comments.update(
    { _id: commentId },
    { $push: { reply: comment } },
    (err, data) => {
      if(err){
        console.log(err);
      }
      if(res){
        res.status(200).json({"message": "Replied on  Comment"});
      }
    }
  );
}
