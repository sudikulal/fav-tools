const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

require("./src/db/mongoose");
const userRoute = require("./src/routes/user.route");
const toolRoute = require("./src/routes/tool.route");

app.use(userRoute);
app.use(toolRoute);

app.get("/", (req, res) => res.send("hello"));

// Create Telegraf bot
const bot = require("./src/util/telegraf.util");

// require("./src/util/bot.util")

// Set up a webhook endpoint for receiving updates
app.post(`/bot${process.env.BOT_TOKEN}`, (req, res) => {
  bot.handleUpdate(req.body, res);
});

// Start the Express server
app.listen(port, () => {
  console.log(`Express server is listening on port ${port}`);
  // bot.launch().then(() => console.log('Bot is running...'));
});
