const mongoose = require("mongoose");
const Joi = require("joi");
const { joiPasswordExtendCore } = require("joi-password");
const { type } = require("express/lib/response");
const JoiPassword = Joi.extend(joiPasswordExtendCore);

const userabdoSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender:{
        type:String,
        enum:["male","female"]
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("abdoUser", userabdoSchema);
