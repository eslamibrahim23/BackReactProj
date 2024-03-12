const Post = require("../models/postsSchema");
const bcryptjs = require("bcrypt");
const jwt = require("jsonwebtoken");

const createPost = async (req, res, next) => {
  try {
    const { title, body, image } = req.body;

    await Post.create({
      title,
      body,
      image,
    });
    return res.status(201).json({ status: "success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error", error });
  }
};

module.exports = { createPost };
