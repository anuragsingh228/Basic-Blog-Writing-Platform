const express = require("express");
const router = express.Router();
const { isUserAuth } = require("../shared/auth");
const { getAllBlog, createBlog ,getBlogById  } = require("../controllers/blog.server.controller")

router.get("/", getAllBlog);

router.post( "/create", createBlog );
router.get( "/:id", getBlogById );


module.exports = router;
