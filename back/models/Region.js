const mongoose = require("mongoose");

const regionSchema = mongoose.Schema(
  {
    title: { type: String },
    country: { type: String },
    image_url: { type: String, default: "" },
    currency: { type: String },
    tax: { type: Number },
    products: [{ type: String, default: "" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Region", regionSchema);
