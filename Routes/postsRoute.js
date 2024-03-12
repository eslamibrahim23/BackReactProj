const router = require("express").Router();

const {
  createPost,
  getallPost,
  getPostById,
  deletePost,
} = require("../controllers/postsController");

router.route("/create").post(createPost);
router.route("/getall").get(getallPost);

router.route("/:id").get(getPostById);
router.route("/:id").delete(deletePost);

module.exports = router;
