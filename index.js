const express = require('express');
const bodyParser = require('body-parser');
const { Telegraf, Markup } = require('telegraf');
require("dotenv").config()

const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON requests
app.use(bodyParser.json());

// Create Telegraf bot
const bot = new Telegraf(process.env.BOT_TOKEN);

require("./src/util/telegraf.util")

// Set up a webhook endpoint for receiving updates
app.post(`/bot${process.env.BOT_TOKEN}`, (req, res) => {
  bot.handleUpdate(req.body, res);
});

// Start the Express server
app.listen(port, () => {
  console.log(`Express server is listening on port ${port}`);
  
  // Set up webhook when the server is started
  const webhookUrl = `https://fav-tool.cyclic.app/bot${process.env.BOT_TOKEN}`;
  bot.telegram.setWebhook(webhookUrl).then(() => {
    console.log(`Webhook set to ${webhookUrl}`);
  });
});
