const blog = require("../model/blog");


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
  const { title, content } = req.body;
  try {
      const newBlog = blog({
        title,
          content,
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

exports.getBlogById = (req, res, next) => {
  let id = req.params.id;
  blog.findById(id, function (err, gotblog) {
    res.status(200).json(gotblog);
  });
}
