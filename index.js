const express = require('express');
const bodyParser = require('body-parser');
require("dotenv").config()
require("./src/db/mongoose")
const toolRoute = require('./src/routes/tool.route')

const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON requests
app.use(bodyParser.json());
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
