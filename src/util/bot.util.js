const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });
const Tool = require("../models/tool.model");

// Function to send messages with Markdown parsing
async function sendMessageWithMarkdown(chatId, list) {
 const text = list.map(({ name, link }) => `*${name} :* [Link](${link})`)
  .join("\n");
  await bot.sendMessage(chatId, text, { parse_mode: "markdown" });
}

// Function to handle errors
function handleErrors(error, chatId) {
  console.error("Error:", error);
  bot.sendMessage(chatId, "An error occurred. Please try again later.");
}

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const messages = msg.text.split(" ");
  const messageText = messages[0].toLowerCase(); 
  try {
    switch (messageText) {
      case "/start":
        return await bot.sendMessage(
          chatId,
          "Welcome to useful site collection, check menu for commands"
        );

      case "/list":
        const toolList = await Tool.find({}, "name link");
        return await sendMessageWithMarkdown(chatId, toolList);

      case "/learn":
      case "/helpers":
      case "/job":
      case "/work":
        const type = { "/learn": 1, "/helpers": 2, "/job": 3, "/work": 4 };
        const typeToolList = await Tool.find(
          { type: type[messageText] },
          "name link"
        );
        return await sendMessageWithMarkdown(chatId, typeToolList);

      case "/search":
        const keyword = messages.slice(1).join(" ");
        const regex = new RegExp(keyword, "i");
        const searchResults = await Tool.find(
          {
            $or: [
              { name: { $regex: regex } },
              { link: { $regex: regex } },
              { description: { $regex: regex } },
            ],
          },
          "name link"
        );

        if (searchResults.length) {
          return await sendMessageWithMarkdown(chatId, searchResults);
        } else {
          return await bot.sendMessage(chatId, "not found");
        }

      default:
        return await bot.sendMessage(chatId, "command not found");
    }
  } catch (error) {
    handleErrors(error, chatId);
  }
});
