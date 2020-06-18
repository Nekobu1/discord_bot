const Discord = require("discord.js");

const client = new Discord.Client();

client.on("Hello World!", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on("message", msg =>{

    if (msg.content === 'pe!pos'){

      var poss = ["You are an amazing person, and I hope you are having a great day!", "Everything you do has a reason! Don't worry about messing up, you learn from failiure!", "You matter! Think about how different the world would be if you didn't exist! The Cute-o-meter:tm: would go way down if you weren't here!", "You are loved, and if you disagree then you are loved even more, I mean I love you", "You expand in abundance, success and love every day, as you inspire those around you to do the same."];
  var pos = Math.floor(Math.random() * poss.length);
  msg.reply(poss[pos]);
  
  }
        
    if (msg.content === "no you don't"){
        msg.reply ("yes he does")
    }
    if (msg.content === "penguins suck"){
        msg.reply ("well they suck less than you do")
    }
    if (msg.content === ("I hate you")){
        msg.reply ("*eats popcorn*")
    }
    if (msg.content === ("hey")){
        msg.reply ("wassup")
    }
     if (msg.content === ("lmfao")){
      msg.reply (":rofl:")
    }
      if (msg.content === ("no u")){
        msg.reply ("no u")
      }
      if (msg.content === ("corona")){
        msg.reply ("good thing penguins can't get it!")
      }
      if (msg.content === ("pe!penguin")){
        msg.reply ("Who doesn't like penguins?")
        console.error("Oops Didn't work sryyy bro");
      }
      client.on('message', async message => {
        if (message.content === 'pe!poll') {
            try {
                await message.react('👍');
                await message.react('👎');
                await message.react('🤷‍♀️');
            } catch (error) {
                console.error("Oops Didn't work sryyy bro");
            }
        }
    });
    
    if (msg.content === 'pe!doismell'){

       var smells = ["You smell ew", "You're meh", "omg why are u so CLEEEAANN"];
     var smell = Math.floor(Math.random() * smells.length);
     msg.reply(smells[smell]);

 }
      
      if (msg.content === ("pe!commands")){
        msg.reply ("Message Commands: pe!pos (gives positivity), pe!penguin (sends a penguin pic ps not working), pe!poll (creates a poll), pe!doismell (do you smell?) "
        )}
        if (msg.content === ("bruh")){
            msg.reply ("bruh")
          }
});//==================================================
client.user.setActivity(`pe!commands and helping ${client.guilds.size} servers`, { type: 'PLAYING', status: 'online'});
  console.log(`The bot ${client.user.tag} successfully logged in.`);
  console.log(`The prefix is ${config.prefix}`);
  console.log(`In ${client.guilds.size} servers.`);
  client.guilds.forEach((guild) => {
  })

