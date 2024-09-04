const { Client, GatewayIntentBits } = require('discord.js');
const config = require('./config.json');


const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ] 
});

client.once('ready', () => {
  console.log(`Bot is ready ${client.user.tag}!`);
  console.log(`Code by zix_212`);
  console.log(`discord.gg/wicks`);
});


client.on('messageCreate', message => {
  if (message.author.bot) return;

  if (config.CHANNEL_IDS.includes(message.channel.id)) {
    message.channel.send(config.IMAGE_URL)
      .then(() => console.log('Image sent successfully'))
      .catch(error => console.error('Error sending message:', error));
  }
});

//التوكن في config.json
client.login(config.BOT_TOKEN);

  // code by zix_212