const { Telegraf, Markup } = require('telegraf');
require('dotenv').config();
const Tool = require('../models/tool.model');

const bot = new Telegraf(process.env.BOT_TOKEN);

// Function to send messages with Markdown parsing
async function sendMessageWithMarkdown(chatId, list) {
  const text = list.map(({ name, link }) => `*${name} :* [Link](${link})`).join('\n');
  await bot.telegram.sendMessage(chatId, text, { parse_mode: 'markdown' });
}

// Function to handle errors
function handleErrors(error, chatId) {
  console.error('Error:', error);
  bot.telegram.sendMessage(chatId, 'An error occurred. Please try again later.');
}

bot.start((ctx) => {
  ctx.reply('Welcome to useful site collection, check menu for commands');
});

bot.command('list', async (ctx) => {
  const toolList = await Tool.find({}, 'name link');
  await sendMessageWithMarkdown(ctx.chat.id, toolList);
});

bot.hears(['/learn', '/helpers', '/job', '/work'], async (ctx) => {
  const type = { '/learn': 1, '/helpers': 2, '/job': 3, '/work': 4 };
  const typeToolList = await Tool.find({ type: type[ctx.message.text] }, 'name link');
  await sendMessageWithMarkdown(ctx.chat.id, typeToolList);
});

bot.command('search', async (ctx) => {
  const keyword = ctx.message.text.split(' ').slice(1).join(' ');
  const regex = new RegExp(keyword, 'i');
  const searchResults = await Tool.find(
    {
      $or: [
        { name: { $regex: regex } },
        { link: { $regex: regex } },
        { description: { $regex: regex } },
      ],
    },
    'name link'
  );

  if (searchResults.length) {
    await sendMessageWithMarkdown(ctx.chat.id, searchResults);
  } else {
    await ctx.reply('Not found');
  }
});

// Handle unknown commands
bot.on('text', async (ctx) => {
  await ctx.reply('Command not found');
});

// Handle errors
bot.catch((err, ctx) => {
  handleErrors(err, ctx.chat.id);
});

// Start the bot
bot.launch().then(() => console.log('Bot is running...'));
