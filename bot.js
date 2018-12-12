require('dotenv').config();
const Telegraf = require('telegraf');
const Markup = require('telegraf/markup');

const botStructure = require('./structure');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.use(Telegraf.log());

const navButtons = [['Go Back']];

let currentCategory;
let previous;
let child = false;

const startFAQ = ctx => {
  if (ctx.chat.type !== 'private') {
    return ctx.telegram.sendMessage(
      ctx.chat.id,
      `Hi @${ctx.message.from.username}! You can DM me to begin :)`,
    );
  }
  return ctx.reply(
    'Select a topic!',
    Markup.keyboard(botStructure.map(item => Object.keys(item)))
      .oneTime()
      .resize()
      .extra(),
  );
};

bot.start(startFAQ);
bot.command('start@EnigmaEd_Bot', startFAQ);
bot.command('faq', startFAQ);
bot.command('faq@EnigmaEd_Bot', startFAQ);

botStructure.forEach(item => Object.keys(item).forEach(key => {
  bot.hears(key, ctx => {
    if (ctx.chat.type === 'private') {
      const choices = item[key].map(innerItem => Object.keys(innerItem)).concat(navButtons);
      console.log(choices);
      return ctx.reply(
        `What do you want to learn about ${key}?`,
        Markup.keyboard(choices)
          .oneTime()
          .resize()
          .extra(),
      );
    }
  });
  item[key].forEach(innerItem => {
    Object.keys(innerItem).forEach(innerKey => {
      bot.hears(`${innerKey}`, ctx => {
        previous = item[key].map(inner => Object.keys(inner)).concat(navButtons);
        currentCategory = previous;
        child = true;
        if (ctx.chat.type === 'private') {
          ctx.reply(
            `${innerItem[innerKey]}`,
            Markup.keyboard(navButtons)
              .oneTime()
              .resize()
              .extra(),
          );
        }
      });
    });
  });
}));

bot.hears('Go Back', ctx => {
  if (previous === currentCategory && child === false) {
    previous = botStructure.map(inner => Object.keys(inner));
  }
  child = false;
  ctx.reply(
    'Select a topic!',
    Markup.keyboard(previous)
      .oneTime()
      .resize()
      .extra(),
  );
});

bot.startPolling();
