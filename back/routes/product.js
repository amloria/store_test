const express = require("express");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-product-config");

const router = express.Router();

const productCtrl = require("../controllers/product");

//Routes

router.get("/", /*auth,*/ productCtrl.getAllProducts);
router.post("/", /* auth,*/ multer, productCtrl.createProduct);
router.put("/:id", /*auth,*/ multer, productCtrl.updateProduct);
router.delete("/:id", /*auth,*/ productCtrl.deleteProduct);
router.get("/:id", /*auth,*/ productCtrl.getOneProduct);

module.exports = router;
