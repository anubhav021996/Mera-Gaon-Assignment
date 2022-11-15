const express = require("express");
const Contacts = require("../models/contacts.model");
const router = express.Router();

router.get("", async (req, res) => {
  try {
    const contacts = await Contacts.find().lean().exec();
    res.status(200).send(contacts);
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
