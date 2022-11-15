const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    contact_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "contacts",
      required: true,
    },
    text: { type: String, required: true },
    otp: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("messages", messageSchema);
