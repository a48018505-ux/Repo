const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.on('messageCreate', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});

client.once('ready', () => {
  console.log('Bot is online!');
});

client.login(process.env.TOKEN);
