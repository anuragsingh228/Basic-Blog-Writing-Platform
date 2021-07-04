const express = require("express");
const router = express.Router();
const { isUserAuth } = require("../shared/auth");
const { getAllBlog, createBlog ,getBlogById, addCommentToBlog, likeBlog } = require("../controllers/blog.server.controller")
const { replyOncomment, createComment, getAllCommentsOnBlog} = require("../controllers/comment.server.controller");

router.get("/", getAllBlog);

router.post( "/create", createBlog );
router.get( "/:id", getBlogById );
router.post( "/comment",createComment );
router.get( "/comment/:id", getAllCommentsOnBlog );
router.post('/comment/reply', replyOncomment);


module.exports = router;
