const express = require('express')
const {
  getBlogs,
  getBlog,
  deleteBlog,
  postBlog,
  createBlog,
} = require("../controllers/blogController");

const router = express.Router();

router.get("/create", createBlog);

router.get("/", getBlogs);

router.get("/:id", getBlog);

router.delete("/:id", deleteBlog);

router.post("/", postBlog);

module.exports = router;