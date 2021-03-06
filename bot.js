const telegram = require('telegraf');
const {Quotes} = require('./commands/Quotes');

const BOT_TOKEN = process.env.BOT_TOKEN;

if (BOT_TOKEN === undefined || "") {
    throw new Error('Bot Token must be provided');
}

/**
 * Telegram Bot Setup
 * @type telegram
 */
const bot = new telegram.Telegraf(BOT_TOKEN);

/*
* Commands
*/

bot.command('source', (ctx) => ctx.reply('Bot Script: '))
bot.command('quote', (ctx) => Quotes.quote(ctx))

bot.launch();
console.log('bot launched');