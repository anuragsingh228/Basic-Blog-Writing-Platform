const blog = require("../model/blog");
const comment = require("../model/comments");
const _ = require("lodash");
const { reject } = require("lodash");



exports.getAllBlog = (req, res, next) => {
  blog.find({}, function(err, reviews) {
    if(!err){
      res.status(200).json(reviews);
    } else{
        console.log(err);
    }
  });
}

exports.createBlog = (req, res, next) => {
  const { title, content, by } = req.body;
  try {
      const newBlog = blog({
        title,
          content,
          by
        });
      console.log(newBlog);
      newBlog.save((err, blog) => {
          if(!err){
            res.status(200).json({
              message: "Blog created succesfuly!"
            });
          } else {
              console.log(err);
          }
        });
  }catch (err) {
      return res.status(500).json({ errors: [{ msg: "Server Error" }] });
    }
}

exports.getBlogById = async (req, res, next) => {
  let id = req.params.id;
  blog.findById(id, async function (err, gotblog) {
    res.status(200).json(gotblog);
  });
}

exports.addCommentToBlog= (req, res, next) => {
  commentId = req.commentid;
  blogId = req.body.id;
  blog.update(
    { _id: blogId },
    { $push: { comments: commentId } },
    (err, blog) => {
      if(err){
        console.log(err);
      }
      if(res){
        res.status(200).json({"message": "Comment Added"});
      }
    }
  );
}

exports.likeBlog = (req, res, next) => {
  blogId = req.body.id;
  blog.update( { _id: blogId }, { $inc: { likes: 1 }}, (err, responce) => {
    res.status(200).json({"message": "Blog Liked"});
  })
}
