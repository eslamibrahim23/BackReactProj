const router = require("express").Router();

const { signupabdo, loginabdo } = require("../controllers/abdoAuthController");

router.route("/signupabdo").post(signupabdo);
router.route("/loginabdo").post(loginabdo);

module.exports = router;