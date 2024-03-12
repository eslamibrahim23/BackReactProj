const router = require("express").Router();

const { createPost,getallPost } = require("../controllers/postsController");

router.route("/create").post(createPost);
router.route("/getall").get(getallPost);

module.exports = router;