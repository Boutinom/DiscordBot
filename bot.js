const Discord = require('discord.js');
const client = new Discord.Client();
const roll = require('./roll');

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', msg => {
     var message = msg.content;
    
    if (message.substring(0, 5) == '!roll') {
      var arg = message.substring(6, message.length-1);
      var res = roll.rollDice(arg);
        
      msg.reply(res);}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
