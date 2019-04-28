const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', function (user, userID, channelID, message, evt) {
    
    if (message.substring(0, 1) == '!') {
      var par1 = message.indexOf("(");
      var func = message.substring(1, par1);
      var arg = message.substring(par1 + 1, message.length-1);
      var res = "";
        
      switch(func) {
        case "help":
            res = help();
        break;
        case "roll":
            res = roll(arg);
        break;
        default:
            res = "Fonction inconnue. Utilise !help() pour visualiser la liste des fonctions disponibles."
} 
        
      client.sendMessage({
        to: channelID,
        message: res
      });
});

function roll(arg) {
      var sep = arg.indexOf("d");
      var mult = Number(arg.substring(0, sep));
      var type = Number(arg.substring(sep + 1, arg.length));

      var dices = [];
      var sum = 0;
      for (i=0; i<mult; i++){
        dices[i] = Math.floor((Math.random() * type) + 1);
        sum = sum + dices[i];
      }

      var res = dices[0] + "";
      if (dices.length > 1) {
        for(i=1; i<dices.length; i++){
          res = res + " + " + dices[i];
        }
        res = res + " = " + sum;
      }
    
    return res;
}

function help(){
    
}

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
