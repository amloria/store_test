const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
app.use(express.json());

const productRoutes = require("./routes/product");
const regionRoutes = require("./routes/region");
const userRoutes = require("./routes/user");

const dotenv = require("dotenv");
dotenv.config();
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_CLUSTER = process.env.DB_CLUSTER;
const DB_SOURCE = process.env.DB_SOURCE;
const DB_MECHAN = process.env.DB_MECHAN;

// DeprecationWarning: the `strictQuery` option will be switched back to `false` by default in Mongoose 7.
// To prepare for this change:
mongoose.set("strictQuery", false);

// Connection with MongoDB Atlas
mongoose
  .connect(
    `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER}/${DB_SOURCE}&${DB_MECHAN}`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connection to MongoDB successful !"))
  .catch(() => console.log("Connection to MongoDB failed !"));

// CORS settings
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// Routes
app.use("/api/products", productRoutes);
app.use("/api/regions", regionRoutes);
app.use("/api/auth", userRoutes);
app.use("/images", express.static(path.join(__dirname, "images")));

// Export app
module.exports = app;
