// mongodb object-data-irgendwas-library
const mongoose = require("mongoose");

// define user model
const EventSchema = new mongoose.Schema(
  {
    eventName: { type: String },
    users: {}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", EventSchema);
