// Import data model
const Region = require("../models/Region");

// CRUD Operations
exports.createRegion = (req, res, next) => {
  // console.log(req.body);
  if (!req.file) {
    req.file = "";
  }
  // delete req.body._id;
  const region = new Region({
    ...req.body,
    image_url: req.file.filename,
  });

  region
    .save()
    .then(() => res.status(201).json({ message: "Saved !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.updateRegion = (req, res, next) => {
  Region.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Updated !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteRegion = (req, res, next) => {
  Region.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Deleted !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOneRegion = (req, res, next) => {
  Region.findOne({ _id: req.params.id })
    .then((region) => res.status(200).json(region))
    .catch((error) => res.status(404).json({ error }));
};

exports.getAllRegions = (req, res, next) => {
  Region.find()
    .then((regions) => res.status(200).json(regions))
    .catch((error) => res.status(400).json({ error }));
};
