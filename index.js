const bodyParser = require("body-parser");
const express = require("express");
const app = express();
require("./src/db/mongoose.js");

const port = process.env.PORT || 3000;

const toolRouter = require("./src/routes/tool.route.js");

app.get("/", (req, res) => {
  res.send("hello");
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(toolRouter);

app.listen(port, () => {
  console.log("server is hosted on :", port);
});
