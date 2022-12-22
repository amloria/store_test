const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    customer_name: { type: String },
    shipping_address: { type: String },
    products: [{ type: String }],
    order_total: { type: Number },
    paid_at: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
