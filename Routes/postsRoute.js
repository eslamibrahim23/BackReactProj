const router = require("express").Router();


const { createPost,getallPost,getPostById } = require("../controllers/postsController");

router.route("/create").post(createPost);
router.route("/getall").get(getallPost);

router.route("/:id").get(getPostById);

module.exports = router;