const express = require("express");
const Contacts = require("../models/contacts.model");
const router = express.Router();

router.get("", async (req, res) => {
  try {
    let page = req.query.page || 1;
    let size = req.query.size || (await Contacts.find().countDocuments());
    const totalPages = Math.ceil(
      (await Contacts.find().countDocuments()) / size
    );
    const contacts = await Contacts.find()
      .skip((page - 1) * size)
      .limit(size)
      .lean()
      .exec();
    res.status(200).send({ contacts, totalPages });
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const contacts = await Contacts.findById(req.params.id).lean().exec();
    res.status(200).send(contacts);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = router;
