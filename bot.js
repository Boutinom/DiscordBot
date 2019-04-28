const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    
    var msg = message.content;
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (msg.substring(0, 1) == '!') {
      var par1 = msg.indexOf("(");
      var func = msg.substring(1, par1);
      var arg = msg.substring(par1 + 1, msg.length-1);
        
      switch(func){
          case "help":
              var res = help();
              break;
              
          case "roll":
              var res = roll(arg);
              break;
              
          default:
              var res = "Cette fonction n'est pas définie. Pour connaître la liste des fonctions disponible, utilise !help().";
              break;
      }


      message.channel.send(res);

            // Just add any case commands if you want to..
     }
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
    var res = new new RichEmbed()
    
    .setTitle("Test")
    .setColor(0xFF0000)
    .setDescription("Loooooong test");
    
    return res;
    
}

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
