const express = require("express");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-region-config");

const router = express.Router();

const regionCtrl = require("../controllers/region");

//Routes
router.post("/", /* auth,*/ multer, regionCtrl.createRegion);
router.put("/:id", /* auth,*/ regionCtrl.updateRegion);
router.delete("/:id", /*auth,*/ regionCtrl.deleteRegion);
router.get("/:id", /*auth,*/ regionCtrl.getOneRegion);
router.get("/", /*auth,*/ regionCtrl.getAllRegions);

module.exports = router;
