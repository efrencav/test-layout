const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const colorSchema = new Schema({
    id: { type: String },
  name: { type: String, required: true },
  pantone: { type: String, required: true },
  cmyk: String,
});

const Color = mongoose.model("Color", colorSchema);

module.exports = Color;