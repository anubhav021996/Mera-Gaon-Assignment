const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path");
const cors = require("cors");

const connect = require("./configs/db");
const contactsController = require("./controllers/contacts.controller");
const messageController = require("./controllers/message.controller");

app.use(cors());
app.use(express.json());

app.use("/contacts", contactsController);
app.use("/message", messageController);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", function (req, res) {
  res.sendFile(
    path.join(__dirname, "../frontend/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

const port = process.env.PORT || 2548;
app.listen(port, async () => {
  try {
    await connect();
    console.log(`Listening at port no. ${port}`);
  } catch (e) {
    console.log(e.message);
  }
});
