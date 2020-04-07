const Discord = require('discord.js');

require('dotenv').config();

const client = new Discord.Client();

client.once('ready', () =>{
  console.log('Beep beep! I am ready');
});

client.on('message', msg =>{ 
  console.log(msg);
  if (msg.channel.name === 'bot-name'){
    
  }
});

client.login(process.env.BOT_TOKEN);
