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

// Joi validation schema
const validationSchema = Joi.object({
  _id: Joi.required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  password: JoiPassword.string()
    .min(6)
    .max(20)
    .minOfNumeric(1)
    .required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
});

// Mongoose pre-save hook for validation
userabdoSchema.pre("save", function (next) {
  const validation = validationSchema.validate(this.toObject());
  if (validation.error) {
    const err = validation.error.details[0].message;

    return Promise.reject(
      "Validation Error: " + validation.error.details[0].message
    ); // Reject the Promise with the validation error
    // Handle validation error (throw an error or handle it based on your application logic)
    next(res.json({ err, status: "failed! " }));
  } else {
    // Validation successful, continue with the save operation
    next();
  }
});

module.exports = mongoose.model("abdoUser", userabdoSchema);
