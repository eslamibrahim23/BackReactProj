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
const getallPost = async (req, res, next) => {
  try {
    const allPosts=await Post.find();
    return res.status(201).json({allPosts});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error", error });
  }
};

const getPostById = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(id);

    const findById = await Post.findById(id).populate("createdBy");
    res.json({ findById });
    console.log(findById);
  } catch (error) {
    return (
      console.log(error),
      res.json({
        error: console.log(error),
        statud: "Story Not found go to Create page",
      })
    );
    next();
  }
};



module.exports = { createPost ,getallPost,getPostById};
