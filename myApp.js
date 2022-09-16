let express = require('express');
let app = express();
require('dotenv').config()
const bodyParser = require('body-parser');

var response = "Hello World".toUpperCase();

app.get("/", (req, res) => res.sendFile(__dirname + "/views/index.html"));

app.use("/public", express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/now",(req, res, next) => {
  req.time = new Date().toString();
  next();
},
(req, res) => {
  res.send({time: req.time});
});

app.get("/json", (req, res) => {
  const json = { message: "Hello json" };
 json.message = process.env.MESSAGE_STYLE === "uppercase" ? json.message.toUpperCase() : json.message;

 res.json(json);
});

app.get("/:word/echo", (req, res) => {
  res.json({ echo: req.params.word })
});

app.route("/name")
    .get((req, res) => {
        res.json({ name: `${req.query.first} ${req.query.last}` });
    })
    .post((req, res) => {
        res.json({ name: `${req.body.first} ${req.body.last}` });
    })




















 module.exports = app;
