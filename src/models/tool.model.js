const mongoose = require("mongoose");

const toolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
    default: "empty",
  },
  link: {
    type: String,
    required: true,
  },
  type: {
    type: Number,
    required: true,
  },
});

const Tool = mongoose.model("tool", toolSchema);

module.exports = Tool;
