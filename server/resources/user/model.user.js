// mongodb object-data-irgendwas-library
const mongoose = require("mongoose");

// define user model
const UserSchema = new mongoose.Schema(
  {
    name: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
