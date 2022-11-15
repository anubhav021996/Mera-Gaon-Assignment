const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

const connect = require("./configs/db");
const contactsController = require("./controllers/contacts.controller");
const messageController = require("./controllers/message.controller");

app.use(cors());
app.use(express.json());

app.use("/contacts", contactsController);
app.use("/message", messageController);

const port = process.env.PORT || 2548;
app.listen(port, async () => {
  try {
    await connect();
    console.log(`Listening at port no. ${port}`);
  } catch (e) {
    console.log(e.message);
  }
});
