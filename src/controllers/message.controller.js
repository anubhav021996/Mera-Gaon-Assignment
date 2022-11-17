const express = require("express");
const Message = require("../models/message.model");
const Contacts = require("../models/contacts.model");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const sendSMS = require("../configs/message");

router.get("", async (req, res) => {
  try {
    const message = await Message.find()
      .sort({ createdAt: -1 })
      .populate("contact_id")
      .lean()
      .exec();
    res.status(200).send(message);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.post(
  "",
  body("contact_id").notEmpty().withMessage("Contact Id required"),
  body("text")
    .notEmpty()
    .withMessage("Text required")
    .bail()
    .isString()
    .withMessage("Invalid Text"),
  body("otp")
    .notEmpty()
    .withMessage("Otp required")
    .bail()
    .isNumeric()
    .withMessage("Invalid Otp")
    .bail()
    .isLength({ min: 6, max: 6 })
    .withMessage("Otp should be of 6 digits"),
  async (req, res) => {
    try {
      //server side validation
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        let newError = errors
          .array()
          .map((el) => ({ key: el.param, msg: el.msg }));
        return res.status(400).send({ errors: newError });
      }
      const contact = await Contacts.findById(req.body.contact_id);
      const result = await sendSMS(
        `91${contact.phone}`,
        "Vonage APIs",
        req.body.text
      );
      console.log(result);
      const message = await Message.create(req.body);
      return res.status(200).send(message);
    } catch (e) {
      res.status(500).send(e.message);
    }
  }
);

module.exports = router;
