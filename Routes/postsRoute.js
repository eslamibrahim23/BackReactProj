const router = require("express").Router();

const { createPost } = require("../controllers/postsController");

router.route("/create").post(createPost);
// router.route("/login").post(login);

module.exports = router;