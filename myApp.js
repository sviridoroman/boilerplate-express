let express = require('express');
let app = express();
require('dotenv').config()

var response = "Hello World".toUpperCase();

app.get("/", (req, res) => res.sendFile(__dirname + "/views/index.html"));

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
  const json = { message: "Hello json" };

  if (process.env.MESSAGE_STYLE === "uppercase") {
    json.message = json.message.toUpperCase();
  }

  res.json(json);
});

























 module.exports = app;
