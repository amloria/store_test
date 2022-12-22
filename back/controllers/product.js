// Import data model
const auth = require("../middleware/auth");
const Product = require("../models/Product");
const fs = require("fs");

// CRUD Operations
exports.createProduct = (req, res, next) => {
  if (!req.file) {
    req.file = "";
  }
  const productObject = req.body;
  // delete productObject._id;
  // delete productObject._userId;
  const product = new Product({
    ...productObject,
    // userId: req.auth.userId,
    image_url: req.file.filename,
  });
  product
    .save()
    .then(() => res.status(201).json({ message: "Saved !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.updateProduct = (req, res, next) => {
  const productObject = req.file
    ? {
        ...req.body.dataProduct,
        image_url: req.file.filename,
      }
    : { ...req.body };

  delete productObject._userId;

  Product.findOne({ _id: req.params.id })
    .then((product) => {
      if (product.userId != req.auth.userId && !req.auth.isAdmin) {
        res.status(403).json({ message: "Not authorized" });
      }
      if (req.file != undefined) {
        const filename = product.image_url;
        fs.unlink(`images/products/${filename}`, () => {
          console.log("File deleted");
        });
      }
      Product.updateOne(
        { _id: req.params.id },
        {
          ...productObject,
        }
      )
        .then(res.status(200).json({ message: "Updated !" }))
        .catch((error) => res.status(401).json({ error }));
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.deleteProduct = (req, res, next) => {
  Product.findOne({ _id: req.params.id })
    .then((product) => {
      if (product.userId != req.auth.userId && !req.auth.isAdmin) {
        res.status(401).json({ message: "Not authorized" });
      } else {
        const filename = product.image_url;
        fs.unlink(`images/product/${filename}`, () => {
          Product.deleteOne({ _id: req.params.id })
            .then(() => {
              res.status(204).json({ message: "Deleted !" });
            })
            .catch((error) => res.status(401).json({ error }));
        });
      }
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

exports.getOneProduct = (req, res, next) => {
  Product.findOne({ _id: req.params.id })
    .then((product) => res.status(200).json(product))
    .catch((error) => res.status(404).json({ error }));
};

exports.getAllProducts = (req, res, next) => {
  Product.find()
    .then((products) => res.status(200).json(products))
    .catch((error) => res.status(400).json({ error }));
};
