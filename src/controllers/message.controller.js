const express = require("express");
const Message = require("../models/message.model");
const router = express.Router();
const sendSMS = require("../configs/message");

router.get("", async (req, res) => {
  try {
    const message = await Message.find().populate("userId").lean().exec();
    res.status(200).send(message);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.post("", async (req, res) => {
  try {
    const from = "Vonage APIs";
    const to = "918127618286";
    const text = "A text message sent using the Vonage SMS API";
    const res= await sendSMS(to, from, text);
    console.log(res);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = router;
