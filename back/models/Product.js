const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image_url: { type: String, default: "" },
    price: { type: Number, required: true },
    sku: { type: String },
    stock: { type: Number },
    keyRef: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
