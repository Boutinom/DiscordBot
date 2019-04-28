const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', msg => {
    var message = msg.content;
    
    if (message.substring(0, 5) == '!roll') {
      //var arg = message.substring(6, message.length-1);
      //var sep = arg.indexOf("d");
      //var mult = Number(arg.substring(0, sep));
      //var type = Number(arg.substring(sep + 1, arg.length));

      //var dices = [];
      //var sum = 0;
      //for (i=0; i<mult; i++){
        //dices[i] = Math.floor((Math.random() * type) + 1);
        //sum = sum + dices[i];
      //}

     //var res = dices[0] + "";
      //if (dices.length > 1) {
        //for(i=1; i<dices.length; i++){
          //res = res + " + " + dices[i];
        //}
        //res = res + " = " + sum;
      //}

      msg.reply('good');
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
