const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token)
    return res
      .status(401)
      .json({ message: "Access Denied. No Token provided" });
  try {
    const decodedToken = jwt.verify(token, process.env.PRIVATE_KEY_TOKEN);
    req.visitor = decodedToken;
    console.log(req.visitor);
    next();
  } catch {
    res.status(400).json({ message: "bad requset-verifyToken" });
  }
}

module.exports = { verifyToken };
