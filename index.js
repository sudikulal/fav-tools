const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const cookieParser = require('cookie-parser');

require("dotenv").config()
require("./src/db/mongoose")
const userRoute = require('./src/routes/user.route')
const toolRoute = require('./src/routes/tool.route')

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: "*" }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(userRoute)
app.use(toolRoute)
 
app.get("/",(req,res)=>res.send("hello"))

// Create Telegraf bot
const bot = require("./src/util/telegraf.util")

// Set up a webhook endpoint for receiving updates
app.post(`/bot${process.env.BOT_TOKEN}`, (req, res) => {
  bot.handleUpdate(req.body, res);
});

// Start the Express server
app.listen(port, () => {
  console.log(`Express server is listening on port ${port}`);
});
bot.launch().then(() => console.log('Bot is running...'));
