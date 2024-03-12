const router = require("express").Router();

const {
  createPost,
  getallPost,
  getPostById,
  deletePost,updatePost,
} = require("../controllers/postsController");

router.route("/create").post(createPost);
router.route("/getall").get(getallPost);

router.route("/:id").get(getPostById);
router.route("/:id").delete(deletePost);
router.route("/:id").put(updatePost);

module.exports = router;
