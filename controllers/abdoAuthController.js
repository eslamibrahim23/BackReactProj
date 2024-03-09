const bcryptjs = require("bcrypt");
const jwt = require("jsonwebtoken");
const abdoUserSchema = require("../models/abdoUserSchema");

const signupabdo = async (req, res, next) => {
  try {
    const { username, gender, email, password } = req.body;
    //new
    const checkUserExisting = await abdoUserSchema.findOne({ email });
    if (checkUserExisting) {
      return res.status(400).json({ message: "User is already Existing" });
    }
    //
    const hashedPassword = await bcryptjs.hash(password, 10);
   const user = await User.create({
    username,
    gender,
      email,
      password: hashedPassword,
    });

    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const loginabdo = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const visitor= await abdoUserSchema.findOne({email})
    if(!visitor)
    return res.status(400).json({ message: "please signup first" })

    const comparePassowrd = await bcryptjs.compare(
      password,
      visitor.password
    );
    if (!comparePassowrd)
      return res.status(400).json({ message: "wrong Password" });
    const token = jwt.sign(
      {
        _id: visitor._id,
        email: visitor.email,
        username: visitor.username,
        gender: visitor.gender,
      },
      process.env.PRIVATE_KEY_TOKEN
    );
   return res.json({token});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { signupabdo, loginabdo };
