const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    firstName: { type: String, required: true, min: 7, max: 128 },
    lastName: { type: String, required: true, min: 7, max: 128 },
    email: {
      type: String,
      required: [true, "can't be blank"],
      lowercase: true,
      unique: true,
    },
    login: {
      type: String,
      required: [true, "can't be blank"],
      lowercase: true,
      unique: true,
    },
    password: { type: String, required: [true, "can't be blank"], max: 1024 },
    phoneNumber: { type: Number },
    address: { type: String },
    isAdmin: { type: Boolean, default: false },
    isAssociation: { type: Boolean, default: false },
    imageUrl: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
