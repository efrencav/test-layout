const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const headersSchema = new Schema({
  id: { type: String, required: true },
  pageTitle: { type: String, required: true },
  pageDesc: { type: String, required: true }
});

const Headers = mongoose.model("Headers", headersSchema);

module.exports = Headers;
